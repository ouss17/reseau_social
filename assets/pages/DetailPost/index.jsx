import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { ArrowDown, ArrowLeft, ArrowUp, Comment, Heart } from '../../components/Svg/Svgs';

const DetailPost = ({ posts }) => {
    const { id } = useParams();
    const post = posts.find((element) => element.idPost == id);
    return (
        <>
            <h1 className="title-page">
                <Link to="/">
                    <ArrowLeft />
                </Link>
                Accueil
            </h1>
            <div id='posts'>
                <div className="avatar-user">
                    <img src={post.avatar} alt="avatar user" />
                </div>
                <p className="infos-user">{post.pseudo} <span className="username">{post.username}</span></p>
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

                <div className="date">
                    <p>{post.creationDatetime}</p>
                </div>
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
            <div className="form-commentary">

            </div>

            {
                post.commentaires.length > 0 &&
                <div className="commentaires">
                    {post.commentaires.map((comment) => (
                        <div className="commentaire">
                            <div className="avatar-user-comment">
                                <img src={comment.avatar} alt="avatar user" />
                            </div>
                            <p className="infos-user-comment">{comment.pseudo} <span className="username">{comment.username} - {comment.creationDatetime}</span></p>
                            <p className="answer">Réponse à <span className="username">{post.username}</span></p>
                            {
                                comment.content !== "" &&
                                <div className="content-comment">
                                    <p className='content comment'>{post.content}</p>
                                </div>
                            }

                            {
                                (comment.file4 !== null)
                                    ?
                                    <div className='content-file files-comment four-file'>
                                        <img src={comment.file1} alt="" />
                                        <img src={comment.file2} alt="" />
                                        <img src={comment.file3} alt="" />
                                        <img src={comment.file4} alt="" />
                                    </div>
                                    :
                                    (comment.file3 !== null)
                                        ?
                                        <div className='content-file files-comment three-file'>
                                            <img src={comment.file1} alt="" />
                                            <img src={comment.file2} alt="" />
                                            <img src={comment.file3} alt="" />
                                        </div>
                                        :
                                        (comment.file2 !== null)
                                            ?
                                            <div className='content-file files-comment two-file'>
                                                <img src={comment.file1} alt="" />
                                                <img src={comment.file2} alt="" />
                                            </div>
                                            :
                                            (comment.file1 !== null)
                                            &&
                                            <div className='content-file files-comment one-file'>
                                                <img src={comment.file1} alt="" />
                                            </div>
                            }
                            <div className="actions">
                                <div className="action-touch like">
                                    <Heart /><ArrowUp /> <span className='number'>{comment.likes}</span>
                                </div>
                                <div className="action-touch unlike">
                                    <Heart /><ArrowDown /> <span className='number'>{comment.unlikes}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

export default DetailPost