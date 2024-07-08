
import { useRouter } from 'next/router'
import { useEffect } from 'react'
 


const Post = () => {
    
    const router = useRouter()
    const postId = router.query.id


    useEffect(() => {

        const postView = async () => {

            const record = await pb.collection('posts').getOne(postId, {
                expand: 'relField1,relField2.subRelField',
            });
        }
        postView();
    },[])
    return(
        <div>
            <h1>
                {postView.items.title}
            </h1>
            <p>
                {postView.items.text}
            </p>
            
        </div>
    )
}

export default Post;