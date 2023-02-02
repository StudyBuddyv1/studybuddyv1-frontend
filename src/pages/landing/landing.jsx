import styles from './landing.module.css'
import Navbar from '../../components/Navbar'
import { Bubble, Convert3DCube, ReceiptSquare, Brush2, ChartCircle, TickSquare } from 'iconsax-react'
import Footer from '../../components/Footer'

const Landing = () => {
    return (
        <>
            <Navbar />
            <div>
                <div className={styles['intro-area']}>
                    <h1>
                        Getting answers made easy for you
                    </h1>
                    <p>
                        A community for Altschoolers that provides  easy access to  assistance from peers and mentors to expand your knowledge.
                    </p>
                    <button>
                        Get Started
                    </button>
                </div>
            </div>
            <div className={styles['about-us-area']}>
                <div className={styles['about-us-text']}>
                    <h2>
                        About Us
                    </h2>
                    <p>
                        Study Buddy is an online e-learning interactive platform that allows Altschoolers  post questions on the community, interact with other community members and also receive feedbacks and responses from other students, instructors and mentors
                    </p>
                </div>
                <div className={styles['about-us-image-area']}>
                    <div className={`${styles['decor-box']} ${styles['decor-box-1']}`}></div>
                    <div className={styles['about-us-image']}>
                        <img src="/Team-demonstration.png" alt="" />
                    </div>
                    <div className={`${styles['decor-box']} ${styles['decor-box-2']}`}></div>
                </div>
            </div>
            <div className={styles['tracks-area']}>
                <h2>Tracks on StudyBuddy</h2>
                <div className={styles['tracks-container']}>
                    <div className={styles['track']}>
                        <TickSquare size="32" variant="Bold" />
                        <p>Frontend Engineering</p>
                    </div>
                    <div className={styles['track']}>
                        <TickSquare size="32" variant="Bold" />
                        <p>Product Design</p>
                    </div>
                    <div className={styles['track']}>
                        <TickSquare size="32" variant="Bold" />
                        <p>Data Analysis</p>
                    </div>
                    <div className={styles['track']}>
                        <TickSquare size="32" variant="Bold" />
                        <p>Backend Engineering</p>
                    </div>
                    <div className={styles['track']}>
                        <TickSquare size="32" variant="Bold" />
                        <p>Product Marketing</p>
                    </div>
                    <div className={styles['track']}>
                        <TickSquare size="32" variant="Bold" />
                        <p>Data Engineering</p>
                    </div>
                    <div className={styles['track']}>
                        <TickSquare size="32" variant="Bold" />
                        <p>Cloud Engineering</p>
                    </div>
                    <div className={styles['track']}>
                        <TickSquare size="32" variant="Bold" />
                        <p>Product Management</p>
                    </div>
                    <div className={styles['track']}>
                        <TickSquare size="32" variant="Bold" />
                        <p>Data Science</p>
                    </div>
                </div>
            </div>
            <div className={styles['benefits-area']}>
                <h5>WHY JOIN US</h5>
                <h2>Benefits of joining Study Buddy</h2>
                <div className={styles['benefits-container']}>
                    <div className={styles['benefit-card']}>
                        <div className={styles['benefit-icon']}>
                            <Convert3DCube size='40' />
                        </div>
                        <h3>Interactive Community</h3>
                        <p>Study Buddy allows you to meet and interact with people that are into similar career and learn with and from them</p>
                    </div>
                    <div className={styles['benefit-card']}>
                        <div className={styles['benefit-icon']}>
                            <Bubble size="40" />
                        </div>
                        <h3>Learning Resources</h3>
                        <p>You will have access to the learning resources that have been uploaded by people who are in your track</p>
                    </div>
                    <div className={styles['benefit-card']}>
                        <div className={styles['benefit-icon']}>

                        </div>
                        <h3>Access to Mentors</h3>
                        <p>Study Buddy has mentors that are knowledgeable in different tech careers and they give answers to any question you may have</p>
                    </div>
                    <div className={styles['benefit-card']}>
                        <div className={styles['benefit-icon']}>
                            <ReceiptSquare size="40" />
                        </div>
                        <h3>Career Growth</h3>
                        <p>Actively participating in the community provided will have your learning process and therefore help your career</p>
                    </div>
                    <div className={styles['benefit-card']}>
                        <div className={styles['benefit-icon']}>
                            <Brush2 size="40" />
                        </div>
                        <h3>Skill Analysis</h3>
                        <p>There are different breakdown of skills for each track and quizzes are available in order for you to assess your skills</p>
                    </div>
                    <div className={styles['benefit-card']}>
                        <div className={styles['benefit-icon']}>
                            <ChartCircle size='40' />
                        </div>
                        <h3>Learning Circle</h3>
                        <p>For Altschoolers who have learning circle, Study Buddy allows you to interact with your circle members as a group</p>
                    </div>
                    <button>
                        Get Started
                    </button>
                </div>
            </div>
            <div className={styles['outro-area']}>
                <div className={styles['icon-boxes-area']}>
                    <div className={`${styles['icon-box']} ${styles['icon-box-1']}`}>
                    </div>
                    <div className={`${styles['icon-box']} ${styles['icon-box-2']}`}></div>
                    <div className={`${styles['icon-box']} ${styles['icon-box-3']}`}></div>
                    <div className={`${styles['icon-box']} ${styles['icon-box-4']}`}></div>
                    <div className={`${styles['icon-box']} ${styles['icon-box-5']}`}></div>
                </div>
                <div className={styles['call-to-action-area']}>
                    <h1>Learn and share knowledge the easy way</h1>
                    <p>Share what you know even as you learn what you do not know in the most convenient way.</p>
                    <button>Get Started</button>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Landing;

