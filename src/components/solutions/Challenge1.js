/**
 * Code your solution here
 */
import * as React from "react";

export class NewsItem {
  constructor(node){
    this.headline = node.News_Headline
    this.imageUrl = node.News_Article_Image_URL
    this.date = this.formatDate(node.News_Date)
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
  //must attribute creator for default image
  //Backgrounds Designed By 30000010267 From <a href="https://lovepik.com/image-401732168/line-color-block-background.html">LovePik.com</a>

  formatDate(date) {
    const dateObject = new Date(date)
    const formattedDate = dateObject.toLocaleDateString("en-US", { month: 'short', year: 'numeric'} )
    return formattedDate
  }
}
