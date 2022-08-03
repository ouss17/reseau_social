import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUp, Comment, Heart } from '../Svg/Svgs'

const Posts = ({posts}) => {
    return (
        <div id="posts">
            {posts.map((post) => (
                <div className='post' key={post.idPost}>
                    <div className="avatar-user">
                        <img src={post.avatar} alt="avatar user" />
                    </div>
                    <p className="infos-user">{post.pseudo} <span className="username">{post.username} - {post.creationDatetime}</span></p>
                    <Link to={"/post/" + post.idPost}>
                        {
                            post.content !== "" &&
                            <div className="content-post">
                                <p className='content'>{post.content}</p>
                            </div>
                        }
                        {
                            (post.file4 !== null)
                                ?
                                <div className='content-file four-file'>
                                    <img src={post.file1} alt="" />
                                    <img src={post.file2} alt="" />
                                    <img src={post.file3} alt="" />
                                    <img src={post.file4} alt="" />
                                </div>
                                :
                                (post.file3 !== null)
                                    ?
                                    <div className='content-file three-file'>
                                        <img src={post.file1} alt="" />
                                        <img src={post.file2} alt="" />
                                        <img src={post.file3} alt="" />
                                    </div>
                                    :
                                    (post.file2 !== null)
                                        ?
                                        <div className='content-file two-file'>
                                            <img src={post.file1} alt="" />
                                            <img src={post.file2} alt="" />
                                        </div>
                                        :
                                        (post.file1 !== null)
                                        &&
                                        <div className='content-file one-file'>
                                            <img src={post.file1} alt="" />
                                        </div>
                        }
                    </Link>
                    <div className="actions">
                        <div className="action-touch commentary">
                            <Comment /> <span className='number'>{post.comment}</span>
                        </div>
                        <div className="action-touch like">
                            <Heart /><ArrowUp /> <span className='number'>{post.likes}</span>
                        </div>
                        <div className="action-touch unlike">
                            <Heart /><ArrowDown /> <span className='number'>{post.unlikes}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Posts