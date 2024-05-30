import Header from "../components/Header"

export const AboutPage = () => {
    return (
        <div className="app">
            <div className="app_container">
                <Header active="about"/>
            </div>
            <div className="p-8 text-left">
            <b>ABC Pty. Ltd</b> is a news provider which provides authentic news to their customers via various outlets. Currently they are facing a major challenge where various outlets are creating false news using AI algorithm. They are trying to prevent anyone using deep fake to create fake news or pictures and to generate misleading news.
The main objective of this project is to the prevent deep fake news or photograph using a blockchain technology. 
<br/>
<br/>
The system will prompt users with a verification message when accessing ABC Pty. Ltd news to confirm its authenticity. We will be making sure that the news network and source can be verified by using network metadata. The network metadata in context of blockchain relates to peer information, transaction propagation, protocol messages, blockchain state synchronization, trust scores and so on.
Enhancing the readers' understanding of the existing problem is what would unlock the issue of the ABC company. They deal with the most critical problem which is their own sources inaccuracy spread by AI algorithms, because many outlets utilize their AI news source. What will happen to the credibility of a person is not only a matter of the accuracy of the information but also of the reputation of ABC Pty. It is a riddle, it has been created by things, which are done to verify the sources, and to increase the news accuracy unintentionally, destroying reader trust (Phillip Rogaway & Thomas Shrimpton, 2004). The main problem is the absence of solid mechanisms for verification of their owner's identity and the information given by the news sources before its release.

            </div>
        </div>
    )
}