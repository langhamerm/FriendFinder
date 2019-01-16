var friends = require("../data/friends");

module.exports = function (app) {
    // returns all friend data found in friends.js in JSON format
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("api/friends", function (req, res) {
        console.log(req.body.scores);
        // user object to hold name, pic, and scores from survey
        var user = req.body;
        //Parse Int the scores for user survey
        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        // Friend Match
        var bestMatchIndex = 0;
        var minimumDifference = 40;

        //Compare potential match scores with a for loop
        for (var i = 0; friends.length; i++) {
            var totalDifference = 0;
            for (var x = 0; x < friends[i].scores.length; x++) {
                var difference = Math.abs(user.scores[x] - friends[i].scores[x]);
                totalDifference += difference;
            }
            // If there is a new minimum difference set that to the bestMatchIndex for next loop of comparisons
            if (totalDifference < minimumDifference) {
                bestMatchIndex = i;
                minimumDifference = totalDifference;
            }
        }
        friends.push(user);

        res.json(friends[bestMatchIndex]);
    });
}