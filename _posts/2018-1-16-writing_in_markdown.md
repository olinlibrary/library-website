---
layout: post
title:  Writing in Markdown
date:   2017-10-13 15:27:28 -0400
categories: 
---

## Context  

This is a tutorial on how to write a Markdown post on our *Winter '18* version of our website.  Library.olin.edu is a Jekyll site, rendering Markdown files *(huge hat tip here to Evan New-Schmidt '20)*.  [Jekyll](https://jekyllrb.com/) allows you to turn plain Markdown text into static web pages. To get a picture of [why Markdown exists](https://daringfireball.net/projects/markdown/) (and why The Library's using it), see [John Gruber's canonical post](https://daringfireball.net/projects/markdown/).  To put it another way, we are dictating a legible document syntax (Markdown) so we may use these files to power our website, but also have them readible. 

>  Markdown is a way of writing plain text. 
>  Find a **[syntax cheatsheet here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)**



## Creation

In the website's filesystem, navigate to the folder with our posts and duplicate an existing markdown post.  

>  Posts are found in **_posts > filename .md or .markdown**

![Posts are found in _posts > filename.md](/assets/img/find-posts.png)


The reason it's easy to start with a duplicate is because at the top of the .md file is some [YAML](http://yaml.org/).  YAML is some meta-instructions for rendering the Markdown.  

```
layout: post
title: How to Post "How-To"
date: 2017-10-02 15:27:28 -400
categories:
```

If you'd prefer to start from a clean slate, open a an existing .md post in your favorite markdown editor.  Be sure you're in the code view and copy the YAML at the top.  Now create a new .md file, copy the YAML, and write.  



## Basic Heading Notes ##

Within a post, the **H2** is the most prominant heading.  **H1** is reserved for the post title.  



## Our Section Headings are H2s ## 
**H2**s, created by adding **##**, plus a single space, before the text. Note: only **H2**s have the horizontal line beneath them. 

### H3's, seen here, don't have lines ###

They're good for other things, perhaps subsections?  


#### H4's also have their place ####

Beyond that, bolding with two asterisks ****** makes the most sense.  



## Media ##

To add photos or gifs to your Markdown post, save the images in the *img* folder.  

> Find that Images are found in **assets > img > filename.***

You'll then link them in the markdown with 

```
![alt text](/assets/img/filname.* "Hover Text")
```

Jekyll understands raw html inside Markdown documents. So embedding a vimeo or youtube video is simply inserting the *embed code* like so:

```<iframe src="https://player.vimeo.com/video/139410557?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> ```

<iframe src="https://player.vimeo.com/video/139410557?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

If this is a blog post, all you need to do is save it to the **_posts** directory. 

> See how to add policy documents here.   

