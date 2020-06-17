"use strict";

const axios = require("axios");
const xml2js = require("xml2js");
const moment = require("moment");
const fs = require("fs");

require('dotenv').config();

const getHatenaData = async url => {
    try {
      const res = await axios.get(url, {
        auth: { username: process.env.HATENA_NAME, password: process.env.HATENA_PASS }
      });
      return res.data;
    } catch (err) {
      const { status, statusText } = err.response;
      console.log(`Error! HTTP Status: ${status} ${statusText}`);
    }
  };

const extractItemsAndNextUri = async data => {
  return new Promise((resolve, reject) => {
    xml2js.parseString(data.toString(), (err, result) => {
      if (err) {
        reject(err);
      } else {
        const entry = result.feed.entry;
        const next_url = result.feed.link[1].$.href;
        resolve({ entry, next_url });
      }
    });
  });
};

const getImgUrls = (content) => {
    const target = JSON.stringify(content);
    const pattern = /https:..cdn-ak.f.st-hatena.com.*(jpg|png)/g;
    let result = target.match(pattern);

    if (result != null){
        result = target.match(pattern)[0];
        if(result.length > 100) {
            result = result.split('\\')[0];
        }
    }
    return result;
}


const insertItems = (entry, item_list) => {
    for (let e of entry) {
      if (e["app:control"][0]["app:draft"][0] == "yes") {
        // 下書き記事をスキップする。
        continue;
      }
    //   getImgUrls(e.content);
      // はてな記事のJSONを生成。
const item = {
        day: moment(e.published.toString()).format("YYYY-MM-DD"),
        title: e.title.toString(),
        href: e.link[1].$.href,
        imgurl : getImgUrls(e.content)
      }
      item_list.push(item);
    }
  };

  const createHatenaJson = async () => {
    let url =
      "https://blog.hatena.ne.jp/humuhimi/humuhimi.hatenablog.com/atom/entry";
    
  
    let item_list = [];
  
    while (item_list.length < 10) {
      const xml_data = await getHatenaData(url); // APIを叩いて記事一覧のXMLを取得する。
      const { entry, next_url } = await extractItemsAndNextUri(xml_data); // 記事一覧と次の記事一覧のURIを抽出する。
      insertItems(entry, item_list); // item_listに下書き以外の記事一覧を格納する。
  
      url = next_url;
    }
      // 記事一覧をJSON形式で保存
  fs.writeFileSync(
    "./json/hatena.json",
    JSON.stringify(item_list)
  );
};



module.exports = createHatenaJson();