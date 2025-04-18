import React from 'react';
import './RightSide.css';
import ProfileIcone from '../../assets/profile.png';
import PredeepFollow from '../../assets/Pradeep-follow.png';
import HemantFollow from '../../assets/hemant-follow.png';
import CristinoFollow from '../../assets/cristino-follow.png';
import VikasFollow from '../../assets/vikas-follow.png';
import SachinFollow from '../../assets/sachin-follow.png';

const RightSide = () => {
    return (
    <div className='rightHomeSide'>
        <div className="topProfileRight">
            <div className="imageDivRightSide">
                <img className="profileImageRight" src={ProfileIcone} alt="Profile" />
            </div>
            <div className="usernameblock">
                <div className="usernameRight">alone_rider.___</div>
                <div className="fullname">Suraj Vishwakarma</div>
            </div>
            <div className="switchButton">Switch</div>
        </div>
        <div className="bottomRightSide">
            <div className="suggestedBlock">
                <div className="suggestedForYou">Suggested for you</div>
                <div className="seeAll">See All</div>
            </div>
            <div className="followBlocks">
                    <div className="imagefollowblock">
                    <img className="suggestedImage" src={PredeepFollow} alt="Profile" />
                    </div>
                    <div className="suggestedUsername">
                        <div className="followUsername">pradeepmuntashir</div>
                        <div className="followsuggest">Followed by richagupta_19 + 3 more...</div>
                    </div>
                <div className="followButton">Follow</div>
                </div>
                <div className="followBlocks">
                    <div className="imagefollowblock">
                    <img className="suggestedImage" src={HemantFollow} alt="Profile" />
                    </div>
                    <div className="suggestedUsername">
                        <div className="followUsername">h_e_m_a_n_t____</div>
                        <div className="followsuggest">Followed by _amrittttta_ + 4 more...</div>
                    </div>
                <div className="followButton1">Follow</div>
                </div>
                <div className="followBlocks">
                    <div className="imagefollowblock">
                    <img className="suggestedImage" src={CristinoFollow} alt="Profile" />
                    </div>
                    <div className="suggestedUsername">
                        <div className="followUsername">cristiano</div>
                        <div className="followsuggest">Followed by deva2395 + 16 more...</div>
                    </div>
                <div className="followButton2">Follow</div>
                </div>
                <div className="followBlocks">
                    <div className="imagefollowblock">
                    <img className="suggestedImage" src={VikasFollow} alt="Profile" />
                    </div>
                    <div className="suggestedUsername">
                        <div className="followUsername">viikas.98</div>
                        <div className="followsuggest">Followed by itz_ganguli_07</div>
                    </div>
                <div className="followButton3">Follow</div>
                </div>
                <div className="followBlocks">
                    <div className="imagefollowblock">
                    <img className="suggestedImage" src={SachinFollow} alt="Profile" />
                    </div>
                    <div className="suggestedUsername">
                        <div className="followUsername">its_sachin_01_</div>
                        <div className="followsuggest">Followed by itz_ganguli_07 + 1 ...</div>
                    </div>
                <div className="followButton4">Follow</div>
                </div>
                <div className="footerRightblock">
                    <div className="footerRight">About · Help · Press · API · Jobs · Privacy · Terms · Locations · Language · Meta Verified</div>
                </div>
                    <div className="footerMeta">© 2025 INSTAGRAM FROM META</div>
            </div>
        </div>   
)
}    
export default RightSide;
