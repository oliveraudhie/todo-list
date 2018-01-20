var toDoLists = [{
    subject: "sub1",
    description: "desc1",
    done: true
  },
  {
    subject: "sub2",
    description: "desc2",
    done: true
  },
  {
    subject: "sub3",
    description: "desc3",
    done: false
  },
  {
    subject: "sub4",
    description: "desc4",
    done: true
  }
]
console.log(toDoLists);

// ----------------------------- create -----------------------------------------------
function addList(subject = null, description = null, done = null) {
  // start input validation
  if ((typeof subject !== "string") || (typeof description !== "string") || (typeof done !== "boolean")) {
    return console.log("please input the data in correct format");
  }
  // end of input validation
  var newValue = {
    subject,
    description,
    done
  }
  toDoLists.push(newValue)
}

// ----------------------------- read -----------------------------------------------
function displayAllList() {
  console.log(toDoLists);
}

function searchListBy(properties, value) {
  var arrKeys = []

  for (i = 0; i < toDoLists.length; i++) {
    if (toDoLists[i][properties] === value) {
      arrKeys.push(i)
    }
  }
  for (i = 0; i < arrKeys.length; i++) {
    console.log(toDoLists[arrKeys[i]])
  }

}
// ----------------------------- update -----------------------------------------------

function editListByKey(key, properties, value) {
  toDoLists[key][properties] = value
  console.log(toDoLists);
}

// ----------------------------- delete -----------------------------------------------
function deleteListByKey(inputkey) {
  toDoLists.splice(0, inputkey);
  console.log(toDoLists);
}

function deleteList(properties, value) {
  var arrKeys = []

  for (i = 0; i < toDoLists.length; i++) {
    if (toDoLists[i][properties] === value) {
      arrKeys.push(i)
    }
  }

  for (i = 0; i < arrKeys.length; i++) {
    toDoLists.splice(arrKeys[i], 1);
  }
  console.log(toDoLists);
}


console.log(`------------------------delete list with subject = "sub1" ----------------"`);
deleteList("subject", "sub1")
console.log(`------------------------add list with subject = "a"----------------"`);
addList("a", "a", false)

displayAllList()