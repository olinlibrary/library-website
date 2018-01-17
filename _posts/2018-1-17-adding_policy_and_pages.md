---
layout: post
title:  Adding Markdown Policy and Pages
date:   2017-10-02 13:27:28 -0400
categories: 
---

## Context  

This tutorial assumes you've written a Markown document that you'd like to formally add to website. You can brush up on [your Markdown here](/blog/writing_in_markdown/).  

Posting a Markdown document this way will give it a title & direct link in the Footer, no other location.    

![Posts are found in _posts > filename.md](/assets/img/footer.png)



## Creation

Open your preferred code editor *(folks around here seem to lean toward [Atom](https://atom.io/), but there's a [Sublime Text](https://www.sublimetext.com/) contingent too.)*

Now, from the editor open **footer.html**  

>  footer.html is found in **_includes > footer.html**

![footer.html is found by navigating to](/assets/img/footer-file.png)


It gets a little less pretty here.  Your file should look something like this, disregarding the colors.

![footer html code](/assets/img/footer-code.png)

Reading more closely, you'll see the Footer Categories inside the **<article>** tags. These are **About Us**, **Library Guides**, **Olin Workshop on the Library** and **Policies & Practices**

```
<article class="...">
  <h4 class="...">Policies & Practices</h4>
```

![article html code](/assets/img/article-code.png)

Identify the Footer Category you'd like to add your document to.  Then, duplicate one of the **<li>**...**</li>**'s in that category and paste it beneath the last one. 

```
 <li class="...">
   <a class="..." href="../policies_practices/event_policy" title="event policy">Event Policy</a>
 </li>
 ```

![li html code](/assets/img/li-code.png) 

Now edit the **<a>**...**</a>**

```
 <li class="...">
   <a class="..." href="../policies_practices/FILENAME(without.md)" title="DESCRIPTION">DOCUMENT_TITLE</a>
 </li>
 ```

 Try and adhere to the current naming convention, which is **The_Document_Title**

Cross your fingers and check the website.  