console.log("A Lycanthrope's Log.");
const werewolf = {
    transformInterval: 2 * 5 * 7 * 9 * 11,
    activities: ["Hunting", "Roaming", "Sleeping"], // Werewolf activities
    isTransformed: false,

   

    transform() {
        this.isTransformed = !this.isTransformed;
        if (this.isTransformed) {
            console.log("The werewolf has transformed!");
            this.performActivities();
        } else {
            console.log("The werewolf has reverted to human form.");
        }
    },

    performActivities() {
        for (let activities of this.activities) {
            console.log(`-${activities}`);
        }
    },
};  

function simulateTime() {
    setInterval(() => {
        werewolf.transform();
   }
    , werewolf.transformInterval);
   
}

simulateTime();
