let currentStage = "start";

const storyData = {
    start: {
        text: "You wake up in a neon-lit alley of a cyberpunk city. A mysterious figure approaches you, offering a choice.",
        choices: ["Join the underground rebellion", "Work for the mega-corporation"],
        consequence: ["rebellionPath", "corporationPath"],
        image: "https://i.redditmedia.com/auLywydqJDT6Jy0mKxqkMrQmkcw1hg_HoAMV1dDUKrc.jpg?w=320&s=f93ee68abf808b7c1b2f29cda586184b"
    },
    rebellionPath: {
        text: "You join the underground rebellion fighting against the oppressive mega-corporations. Your first mission is to infiltrate a heavily guarded facility.",
        choices: ["Infiltrate at night", "Gather intel before the mission"],
        consequence: ["nightInfiltrationPath", "gatherIntelPath"],
        image: "https://preview.redd.it/fv7vf4z0ujp71.png?width=1080&crop=smart&auto=webp&s=ece7b64be31311a726f5f4537a528ca5d78986d1"
    },
    corporationPath: {
        text: "You decide to work for the mega-corporation, climbing the corporate ladder. Your first assignment is to secure a lucrative deal with a rival corporation.",
        choices: ["Negotiate peacefully", "Sabotage the rival corporation"],
        consequence: ["peacefulNegotiationPath", "sabotagePath"],
        image: "https://th.bing.com/th/id/OIP.afNeoU7L84qolb0zuWJrOQAAAA?pid=ImgDet&rs=1"
    },
    nightInfiltrationPath: {
        text: "You choose to infiltrate the facility at night, using the cover of darkness. The mission is a success, and the rebellion gains valuable information.",
        choices: ["Continue working with the rebellion", "Betray the rebellion and sell the information"],
        consequence: ["continueRebellionPath", "betrayRebellionPath"],
        image: "https://th.bing.com/th/id/OIP.nBg8qbI_4NEX3jNi1DMrCAHaEU?pid=ImgDet&rs=1"
    },
    gatherIntelPath: {
        text: "You decide to gather intel before the mission, uncovering a hidden weakness in the facility's security. The rebellion carries out a successful infiltration.",
        choices: ["Continue working with the rebellion", "Sell the intel to the highest bidder"],
        consequence: ["continueRebellionPath", "sellIntelPath"],
        image: "https://i.redd.it/v-gathering-intel-on-dogtown-v0-784nhzqxmtlb1.png?width=3840&format=png&auto=webp&s=2c166f81cee9c978e2be51791c6ed6961bea13ef"
    },
    peacefulNegotiationPath: {
        text: "You opt for peaceful negotiation with the rival corporation, securing a mutually beneficial deal. You gain the corporation's trust and rise through the ranks.",
        choices: ["Continue corporate dealings", "Expose the corporation's secrets to the public"],
        consequence: ["continueCorporatePath", "exposeCorpSecretsPath"],
        image: "https://external-preview.redd.it/this-is-why-i-think-corpo-v-is-the-best-path-she-he-already-v0-xaq-bfU8oZZQVgOTfofiATVMgS7JEtw2lBTnUEDpryU.png?format=pjpg&auto=webp&s=79a9e436d5d2f5de0de9a4501bec1a92e5b95298"
    },
    sabotagePath: {
        text: "You choose to sabotage the rival corporation, ensuring the mega-corporation's dominance. Your actions lead to increased power and influence within the corporation.",
        choices: ["Expand your influence", "Feel guilty and seek redemption"],
        consequence: ["expandInfluencePath", "seekRedemptionPath"],
        image: "https://i.ytimg.com/vi/0xXUZIxtD4U/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGH8gTigfMA8=&rs=AOn4CLDcI0hKtw6Mian3zkKrwCgivg7Xww"
    },
    continueRebellionPath: {
        text: "You continue working with the rebellion, participating in more missions against the mega-corporations. The fight for freedom intensifies.",
        choices: [],
        consequence: [],
        image: "https://i.ytimg.com/vi/hUrsXO7_p9A/maxresdefault.jpg"
    },
    betrayRebellionPath: {
        text: "You betray the rebellion and sell the information to the highest bidder. The mega-corporation rewards you handsomely, but you live with the guilt of betrayal.",
        choices: [],
        consequence: [],
        image: "https://i.ytimg.com/vi/tJKnJ2InS44/sddefault.jpg"
    },
    sellIntelPath: {
        text: "You sell the gathered intel to the highest bidder, accumulating wealth and power. However, your actions have consequences, and enemies are made.",
        choices: [],
        consequence: [],
        image: "https://substackcdn.com/image/fetch/f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fnoahpinion.substack.com%2Fapi%2Fv1%2Fpost_preview%2F31724220%2Ftwitter.jpg%3Fversion%3D2"
    },
    continueCorporatePath: {
        text: "You continue corporate dealings, navigating the intricate web of corporate politics. Your influence grows, and you become a key player in the cyberpunk city.",
        choices: [],
        consequence: [],
        image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/cyberpunk-2077/f/fd/CP2077_Corpo1.png"
    },
    exposeCorpSecretsPath: {
        text: "You expose the corporation's secrets to the public, becoming a whistleblower. The mega-corporation collapses under public scrutiny, and you go into hiding.",
        choices: [],
        consequence: [],
        image: "https://preview.redd.it/thoughts-on-the-talent-academy-gig-v0-lt5ksqsv5irb1.jpg?auto=webp&s=9df1303c3fb2e72e8f0f22ed33eb89fc571e5509"
    },
    expandInfluencePath: {
        text: "You expand your influence within the mega-corporation, becoming a formidable figure. Your decisions shape the future of the cyberpunk city.",
        choices: [],
        consequence: [],
        image: "https://external-preview.redd.it/d4rR2suYYCp9hMArSPFE4tPAXQENI0IXx5RyptPuSEg.jpg?width=640&crop=smart&auto=webp&s=b70132773db6af5d6bcd690291ee6ef8670a400f"
    },
    seekRedemptionPath: {
        text: "Feeling guilty about your sabotage, you seek redemption by exposing the mega-corporation's illegal activities. The truth comes out, leading to a corporate downfall.",
        choices: [],
        consequence: [],
        image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/cyberpunk-2077/8/87/Vlcsnap-2023-10-01-23h51m19s809.png?width=1280"
    }
};

function startGame() {
    currentStage = "start";
    updatePage();
}


function updatePage() {
    const currentStory = storyData[currentStage];
    
    document.getElementById("story").innerText = currentStory.text;

    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    
    for (let i = 0; i < currentStory.choices.length; i++) {
        const choiceBtn = document.createElement("button");
        choiceBtn.textContent = currentStory.choices[i];
        choiceBtn.addEventListener("click", () => makeChoice(i));
        choicesContainer.appendChild(choiceBtn);
    }

    // Set the image source dynamically based on the current stage
    document.getElementById("story-image").src = currentStory.image;
}

function endGame() {
    const currentStory = storyData[currentStage];
    document.getElementById("story").innerText = currentStory.text;

    document.getElementById("choices").innerHTML = "";

    // Set the image source dynamically based on the current stage
    document.getElementById("story-image").src = currentStory.image;
}



function makeChoice(index) {
    const currentStory = storyData[currentStage];
    const nextStage = currentStory.consequence[index];

    if (nextStage === "continueRebellionPath" || nextStage === "betrayRebellionPath" || nextStage === "sellIntelPath" || nextStage === "continueCorporatePath" || nextStage === "exposeCorpSecretsPath" || nextStage === "expandInfluencePath" || nextStage === "seekRedemptionPath") {
        currentStage = nextStage;
        endGame();
    } else {
        currentStage = nextStage;
        updatePage();
    }
}

startGame();
