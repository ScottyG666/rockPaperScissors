function computerChoice() {
    let current = (Math.random() * 100);
    if (current < 33) {
        // Make choice Rock
        return "Rock";
    }
    else if (current > 33 && current < 66) {
        // make choice Paper
        return "Paper";
    }
    else {
        //make choice Slizzle
        return "Slizzle";
    }
};

