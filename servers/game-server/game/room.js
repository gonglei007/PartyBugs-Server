//创建一个房间类，实现房间的状态管理。
class room{
    constructor(roomId){
        this.roomId = roomId;
        this.players = [];
        this.status = 'idle';
    }
    //加入玩家
    join(player){
        this.players.push(player);
    }
    //离开玩家
    leave(playerId){
        this.players = this.players.filter((player)=>{
            return player.id != playerId;
        })
    }
    //获取房间内玩家
    getPlayers(){
        return this.players;
    }
    //获取房间状态
    getStatus(){
        return this.status;
    }
    //设置房间状态
    setStatus(status){
        this.status = status;
    }
    //获取房间ID
    getRoomId(){
        return this.roomId;
    }
    //获取房间内玩家数量
    getPlayersCount(){
        return this.players.length;
    }
    //获取房间内玩家的ID
    getPlayersId(){
        let playersId = [];
        this.players.forEach((player)=>{
            playersId.push(player.id);
        })
        return playersId;
    }
    //获取房间内玩家的信息
    getPlayersInfo(){
        let playersInfo = [];
        this.players.forEach((player)=>{
            playersInfo.push({
                id:player.id,
                nickname:player.nickname,
                avatar:player.avatar
            })
        })
        return playersInfo;
    }
    //获取房间内玩家的分数
    getPlayersScore(){
        let playersScore = [];
        this.players.forEach((player)=>{
            playersScore.push({
                id:player.id,
                score:player.score
            })
        })
        return playersScore;
    }
    //获取房间内玩家的准备状态
    getPlayersReady(){
        let playersReady = [];
        this.players.forEach((player)=>{
            playersReady.push({
                id:player.id,
                ready:player.ready
            })
        })
        return playersReady;
    }
    //获取房间内玩家的准备状态
    getPlayersReadyCount(){
        let readyCount = 0;
        this.players.forEach((player)=>{
            if(player.ready){
                readyCount++;
            }
        })
        return readyCount;
    }
    //获取房间内玩家的准备状态
    getPlayersReadyId(){
        
    }
}