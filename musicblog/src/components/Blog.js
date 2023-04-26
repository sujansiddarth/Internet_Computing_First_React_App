import React, { useState, useEffect } from 'react';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//axios for xml request
import axios from 'axios';
//xml file reader
import XMLParser from 'react-xml-parser';
import './Blog.css';
function Blog() {

  const [date, setDate] = useState([]);
  const [author, setAuthor] = useState([])
  const [title, setTitle] = useState([])
  const [text, setText] = useState([])
  const [img, setImg] = useState([])
  const [body, setBody] = useState([])
  const [blogData1, setBlogData1] = useState([]);
  const [blogData2, setBlogData2] = useState([]);
  const [blogData3, setBlogData3] = useState([]);


  useEffect(() => {
    axios
      .get("/assets/data.xml", {
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
        },
      })
      .then((res) => {
        const jsonDataFromXml = new XMLParser().parseFromString(res.data);
        const blogs = jsonDataFromXml.getElementsByTagName("blog");
        const blogData1 = blogs.map((blog) => ({
          date: blog.getElementsByTagName("date")[0].value,
          author: blog.getElementsByTagName("author")[0].value,
          title: blog.getElementsByTagName("title")[0].value,
          text: blog.getElementsByTagName("text")[0].value,
          img: blog.getElementsByTagName("image_path")[0].value,
          body: blog.getElementsByTagName("body")[0].value,
          expanded: false,
        }));
        const blogData2 = blogs.map((blog) => ({
            date: blog.getElementsByTagName("date")[1].value,
            author: blog.getElementsByTagName("author")[1].value,
            title: blog.getElementsByTagName("title")[1].value,
            text: blog.getElementsByTagName("text")[1].value,
            img: blog.getElementsByTagName("image_path")[1].value,
            body: blog.getElementsByTagName("body")[1].value,
          }));
          const blogData3 = blogs.map((blog) => ({
            date: blog.getElementsByTagName("date")[2].value,
            author: blog.getElementsByTagName("author")[2].value,
            title: blog.getElementsByTagName("title")[2].value,
            text: blog.getElementsByTagName("text")[2].value,
            img: blog.getElementsByTagName("image_path")[2].value,
            body: blog.getElementsByTagName("body")[2].value,
          }));
        setBlogData1(blogData1);
        setBlogData2(blogData2);
        setBlogData3(blogData3);
      });
  }, []);

  const handleReadMore1 = (index) => {
    const updatedBlogData = [...blogData1];
    updatedBlogData[index].expanded = !updatedBlogData[index].expanded;
    setBlogData1(updatedBlogData);
  };
  const handleReadMore2 = (index) => {
    const updatedBlogData = [...blogData2];
    updatedBlogData[index].expanded = !updatedBlogData[index].expanded;
    setBlogData2(updatedBlogData);
  };
  const handleReadMore3 = (index) => {
    const updatedBlogData = [...blogData3];
    updatedBlogData[index].expanded = !updatedBlogData[index].expanded;
    setBlogData3(updatedBlogData);
  };


    return (
        <>
            <div className="container top">
                <div className="row top">
                    <div className="col-md-4">
                        {blogData1.map((blog, index) => (
                            <div className="card mb-4" key={index}>
                                <img src={blog.img} className="card-img-top" alt="Blog Image" />
                                <div className="card-body">
                                    <h5 className="card-title">{blog.title}</h5>
                                    <p className="card-text">{blog.text}</p>
                                    <button className="btn btn-primary" onClick={() => handleReadMore1(index)}>
                                        {blog.expanded ? "Read Less" : "Read More"}
                                    </button>
                                    {blog.expanded && (
                                        <div className='full-blog'>
                                            <p>{blog.body}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">
                                        {blog.date} - {blog.author}
                                    </small>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-4">
                        {blogData2.map((blog, index) => (
                            <div className="card mb-4" key={index}>
                                <img src={blog.img} className="card-img-top" alt="Blog Image" />
                                <div className="card-body">
                                    <h5 className="card-title">{blog.title}</h5>
                                    <p className="card-text">{blog.text}</p>
                                    <button className="btn btn-primary" onClick={() => handleReadMore2(index)}>
                                        {blog.expanded ? "Read Less" : "Read More"}
                                    </button>
                                    {blog.expanded && (
                                        <div className='full-blog'>
                                            <p>{blog.body}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">
                                        {blog.date} - {blog.author}
                                    </small>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-4">
                        {blogData3.map((blog, index) => (
                            <div className="card mb-4" key={index}>
                                <img src={blog.img} className="card-img-top" alt="Blog Image" />
                                <div className="card-body">
                                    <h5 className="card-title">{blog.title}</h5>
                                    <p className="card-text">{blog.text}</p>
                                    <button className="btn btn-primary" onClick={() => handleReadMore3(index)}>
                                        {blog.expanded ? "Read Less" : "Read More"}
                                    </button>
                                    {blog.expanded && (
                                        <div className='full-blog'>
                                            <p>{blog.body}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">
                                        {blog.date} - {blog.author}
                                    </small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;
