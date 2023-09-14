import React from 'react';
import './Blog.css';


import Blog1 from '../../assets/LeetCode_Sharing.png';
import Blog2 from '../../assets/geek.png';
import Blog3 from '../../assets/hacker.png';

import { SiHashnode } from 'react-icons/si';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Coding Plateform</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://leetcode.com/_Divakar_/"><span className="blog__category">LeetCode</span></a>
                        <a href="https://leetcode.com/_Divakar_/"><img src={Blog1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title"><a href="https://leetcode.com/_Divakar_/" style={{color: '#A7AEB9'}}>Solved 100+ Problem</a></h3>
                        <div className="blog__meta">
                            <span>24 February, 2023</span>
                            <span className="blog__dot">|</span>
                            <span><a href="https://leetcode.com/_Divakar_/" style={{color: '#8B88B1'}}>LeetCode</a></span>
                        </div>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://auth.geeksforgeeks.org/user/divakarjha9128"><span className="blog__category">GeekForGeeks</span></a>
                        <a href="https://auth.geeksforgeeks.org/user/divakarjha9128"><img src={Blog2} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                    <h3 className="blog__title "><a href="https://auth.geeksforgeeks.org/user/divakarjha9128" style={{color: '#A7AEB9'}}>Solved 250+ DSA Problems</a></h3>
                        <div className="blog__meta">
                            <span>21 Jan, 2023</span>
                            <span className="blog__dot">|</span>
                            <span><a href="https://auth.geeksforgeeks.org/user/divakarjha9128" style={{color: '#8B88B1'}}>GeeksForGeeks</a></span>
                        </div>
                    </div>
                </div>
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="https://www.hackerrank.com/divakarjha9128"><span className="blog__category">HackerRank</span></a>
                        <a href="https://www.hackerrank.com/divakarjha9128"><img src={Blog3} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                    <h3 className="blog__title"><a href="https://www.hackerrank.com/divakarjha9128" style={{color: '#A7AEB9'}}>HackerRank</a></h3>
                        <div className="blog__meta">
                            <span>21 Jan, 2023</span>
                            <span className="blog__dot">|</span>
                            <span><a href="https://www.hackerrank.com/divakarjha9128" style={{color: '#8B88B1'}}>HackerRank</a></span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <span align="center"><br></br>
                    <p align="center"><a href="#" className='home__social-link' target='_blank' rel='noreferrer'><b>⬇ FOR MORE BLOGS ⬇</b></a></p>
                    <p><a href="#" className='home__social-link' target='_blank' rel='noreferrer'><SiHashnode /></a></p>
            </span> */}
        </section>
    )
}

export default Blog