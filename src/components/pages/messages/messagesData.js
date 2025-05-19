import harshpic from '../../assets/harsh-story.png';
import dipanshupic from '../../assets/dipanshu-story.png';
import viratpic from '../../assets/virat-story.png';
import srkpic from '../../assets/srk-story.png';
import pandaypic from '../../assets/reels/panday-profile.jpg';
import payalpic from '../../assets/payal-story.png';


const messagesData = [

  {
      id: 1,
      username: "_harsh_01",
      profilePic: harshpic,
      messages: [
        { from: "_harsh_01", text: "Hii Bhai kaisa hai?", time: "10:00 AM" },
        { from: "me", text: "Ekdum mst, tu bta kaisa hai?", time: "10:01 AM" },
        { from: "_harsh_01", text: "Kal Ghumne ka plan kr rha hu chalega?", time: "10:03 AM" },
        { from: "me", text: "Haa thik hai, Par jana kaha hai?", time: "10:04 AM" },
        { from: "_harsh_01", text: "Abhi decide nhi kiya hu", time: "10:06 AM" },
        { from: "_harsh_01", text: "Ek baar sabse confirm kr leta hu", time: "10:07 AM" },
        { from: "_harsh_01", text: "Fir batata hu tjhe", time: "10:07 AM" },
        { from: "me", text: "Haa thik hai", time: "10:08 AM" },
        { from: "me", text: "Kon Kon hai waise?", time: "10:08 AM" },
      ],
    },
    {
      id: 2,
      username: "dipanshu",
      profilePic: dipanshupic,
      messages: [
        { from: "dipanshu", text: "Are you coming today?", time: "9:30 AM" },
        { from: "me", text: "Yes, I’ll be there by 11.", time: "9:32 AM" },
      ],
    },
    {
      id: 3,
      username: "virat",
      profilePic: "/src/assets/virat-story.png",
      messages: [
        { from: "virat", text: "", time: "" },
      ],
    },
    {
      id: 4,
      username: "srk",
      profilePic: "/src/assets/srk-story.png",
      messages: [
      ],
    },
    {
        id: 5,
        username: "pandey_kushal_0111",
        profilePic: pandaypic,
        messages: [
            { from: "pandey_kushal_0111", text: "Hii bhai", time: "07:35 PM" },
        ],
    },
    {
        id: 6,
        username: "payalgaming",
        profilePic: payalpic,
        messages: [
            { from: "payalgaming", text: "Hii", time: "03:02 PM" },
        ],
    },
  ];
  
  export default messagesData;
  