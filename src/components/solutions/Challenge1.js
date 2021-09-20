/**
 * Code your solution here
 */
import * as React from "react";

export class NewsItem {
    constructor(node){
      this.headline = node.News_Headline
      this.imageUrl = node.News_Article_Image_URL
      this.date = node.News_Date
      this.attachmentUrl = node.News_Attachment_Name
      this.newsId = node.News_ID
      this.text = node.News_Text
      this.outletName = node.Outlet_Name
      this.contactName = node.Contact_Name
        /**
         * Write a class that will represent a news item
         * based on data sourced from the API feed
         * found in pages/challenge1.js
         *
         * The properties of the class should be such that the destructered
         * expression below would save the expected data:
         * const { headline, imageUrl, date, attachmentUrl, newsId, text, outletName, contactName } = newsItem
         */
    }
}
