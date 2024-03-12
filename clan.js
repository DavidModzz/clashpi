class Clan {
    constructor(tag, name, type, description, badgeId, clanScore, clanWarTrophies, location, requiredTrophies, donationsPerWeek, members, memberList) {
        this.tag = tag;
        this.name = name;
        this.type = type;
        this.description = description;
        this.badgeId = badgeId;
        this.clanScore = clanScore;
        this.clanWarTrophies = clanWarTrophies;
        this.location = location;
        this.requiredTrophies = requiredTrophies;
        this.donationsPerWeek = donationsPerWeek;
        this.members = members;
        this.memberList = memberList;
    }

    static fromJSON(jsonObject) {
        return new Clan(
            jsonObject.tag,
            jsonObject.name,
            jsonObject.type,
            jsonObject.description,
            jsonObject.badgeId,
            jsonObject.clanScore,
            jsonObject.clanWarTrophies,
            jsonObject.location,
            jsonObject.requiredTrophies,
            jsonObject.donationsPerWeek,
            jsonObject.members,
            jsonObject.memberList
        );
    }

    toString() {
        return this.name;
    }

}


module.exports = {Clan};