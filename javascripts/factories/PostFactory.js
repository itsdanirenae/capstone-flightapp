"use strict";

app.factory("PostFactory", function($q, $http, FIREBASE_CONFIG){
  var getPost = function(userId){
    return $q((resolve,reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/posts.json?orderBy="airportCode"&equalTo="${uid}"`)
        .success(function(response){
          let posts = [];
          Object.keys(response).forEach(function(key){
            response[key].id = key;
            posts.push(response[key]);
          });
          resolve(posts);
        })
        .error(function(errorResponse){
          reject(errorResponse);
        });
    });
  };

 //  var postNewItem = function(newItem){
 //    return $q((resolve, reject)=>{
 //      $http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`,
 //          JSON.stringify({
 //          assignedTo: newItem.assignedTo,
 //          isCompleted: newItem.isCompleted,
 //          task: newItem.task,
 //          uid: newItem.uid
 //        })
 //      )
 //        .success(function(postResponse){
 //          resolve(postResponse);
 //        })
 //        .error(function(postError){
 //          reject(postError);
 //        });
 //    });
 //  };

 //  var deleteItem = function(itemId){
 //    return $q((resolve, reject)=>{
 //      $http.delete(`${FIREBASE_CONFIG.databaseURL}/items/${itemId}.json`)
 //      .success(function(deleteResponse){
 //        resolve(deleteResponse);
 //      })
 //      .error(function(deleteError){
 //        reject(deleteError);
 //      });
 //    });
 //  };


 //  var getSingleItem = function(itemId){
 //    return $q((resolve, reject)=>{
 //      $http.get(`${FIREBASE_CONFIG.databaseURL}/items/${itemId}.json`)
 //      .success(function(getSingleResponse){
 //        resolve(getSingleResponse);
 //      })
 //      .error(function(getSingleError){
 //        reject(getSingleError);
 //      });
 //    });
 //  };

 // var editItem = function(editItem){
 //    return $q((resolve, reject)=>{
 //      $http.put(`${FIREBASE_CONFIG.databaseURL}/items/${editItem.id}.json`,
 //          JSON.stringify({
 //          assignedTo: editItem.assignedTo,
 //          isCompleted: editItem.isCompleted,
 //          task: editItem.task,
 //          uid: editItem.uid
 //        })
 //      )
 //        .success(function(editResponse){
 //          resolve(editResponse);
 //        })
 //        .error(function(editError){
 //          reject(editError);
 //        });
 //    });
 //  };

return {getPost:getPost};
// {getItemList:getItemList, postNewItem:postNewItem, deleteItem:deleteItem, getSingleItem:getSingleItem, editItem:editItem};
});
