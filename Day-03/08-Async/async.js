/* Sync */
function addSync(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var result = x + y;
    console.log("[SP] returning result");
    return result;
}

function addSyncClient(x,y){
    console.log("[SC] triggering add operation");
    var result = addSync(x,y);
    console.log("[SC] result = ", result);
}

/* Async - Callback */
function add(x,y, onResult){
    console.log("[SP] processing ", x , " and ", y);
    setTimeout(function(){
        var result = x + y;
        console.log("[SP] returning result");
        if (onResult) onResult(result);
    },3000);
}

function addClient(x,y){
    console.log("[SC] triggering add operation");
    add(x,y, function(result){
        console.log("[SC] result = ", result);
    });
}

/* Async  - Events*/

function getAdder(){
    var callbacks = [];
    return {
        add : function(x,y){
            console.log("[SP] processing ", x , " and ", y);
            setTimeout(function(){
                var result = x + y;
                console.log("[SP] returning result");
                callbacks.forEach(function(callback){
                    callback(result);
                });
            },3000);
        },
        addCallback : function(callback){
            callbacks.push(callback);
        }
    };
}

function addClient(x,y){
    var adder = getAdder();
    adder.addCallback(function(result){
        console.log("[SC] result = ", result);
    });
    console.log("[SC] triggering add operation");
    adder.add(x,y);
}

/* Async - Promsies */
function add(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var p = new Promise(function(resolve, reject){
        setTimeout(function(){
            var result = x + y;
            console.log("[SP] returning result");
            resolve(result);
        },3000);
    });
    return p;
}

