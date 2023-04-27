import Container from "../../components/Container"
import styles from './homePage.module.css'
import Header from "../../components/Header"
import CreatePostCart from "../../components/CreatePostCard"
import PostCard from "../../components/PostCard"

export default function HomePage(){
    return(
        <Container>
            <div className={styles.homePageWrapper}>
                <Header />
                <main>
                    <CreatePostCart />
                    <PostCard />
                </main>
            </div>
        </Container>
    )
}