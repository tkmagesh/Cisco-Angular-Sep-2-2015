 var utils = angular.module("utils", []);
        utils.value("defaultTrimLength", 25);
        utils.filter("trimText", function(defaultTrimLength){
            return function(data, trimLength){
                trimLength = trimLength || defaultTrimLength;
                return data.length > trimLength ? data.substr(0,trimLength) + '...' : data;
            }
        });
