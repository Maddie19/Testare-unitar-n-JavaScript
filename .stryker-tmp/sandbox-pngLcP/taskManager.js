// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
class TaskManager {
  constructor(tasks = stryMutAct_9fa48("0") ? ["Stryker was here"] : (stryCov_9fa48("0"), [])) {
    if (stryMutAct_9fa48("1")) {
      {}
    } else {
      stryCov_9fa48("1");
      this.tasks = tasks;
    }
  }
  addTask(text) {
    if (stryMutAct_9fa48("2")) {
      {}
    } else {
      stryCov_9fa48("2");
      if (stryMutAct_9fa48("5") ? (!text || typeof text !== "string") && !text.trim() : stryMutAct_9fa48("4") ? false : stryMutAct_9fa48("3") ? true : (stryCov_9fa48("3", "4", "5"), (stryMutAct_9fa48("7") ? !text && typeof text !== "string" : stryMutAct_9fa48("6") ? false : (stryCov_9fa48("6", "7"), (stryMutAct_9fa48("8") ? text : (stryCov_9fa48("8"), !text)) || (stryMutAct_9fa48("10") ? typeof text === "string" : stryMutAct_9fa48("9") ? false : (stryCov_9fa48("9", "10"), typeof text !== (stryMutAct_9fa48("11") ? "" : (stryCov_9fa48("11"), "string")))))) || (stryMutAct_9fa48("12") ? text.trim() : (stryCov_9fa48("12"), !(stryMutAct_9fa48("13") ? text : (stryCov_9fa48("13"), text.trim())))))) {
        if (stryMutAct_9fa48("14")) {
          {}
        } else {
          stryCov_9fa48("14");
          throw new Error(stryMutAct_9fa48("15") ? "" : (stryCov_9fa48("15"), "Task text invalid!"));
        }
      }
      const task = stryMutAct_9fa48("16") ? {} : (stryCov_9fa48("16"), {
        text: stryMutAct_9fa48("17") ? text : (stryCov_9fa48("17"), text.trim()),
        completed: stryMutAct_9fa48("18") ? true : (stryCov_9fa48("18"), false)
      });
      this.tasks.push(task);
      return task;
    }
  }
  deleteTask(index) {
    if (stryMutAct_9fa48("19")) {
      {}
    } else {
      stryCov_9fa48("19");
      if (stryMutAct_9fa48("22") ? (typeof index !== 'number' || index < 0) && index >= this.tasks.length : stryMutAct_9fa48("21") ? false : stryMutAct_9fa48("20") ? true : (stryCov_9fa48("20", "21", "22"), (stryMutAct_9fa48("24") ? typeof index !== 'number' && index < 0 : stryMutAct_9fa48("23") ? false : (stryCov_9fa48("23", "24"), (stryMutAct_9fa48("26") ? typeof index === 'number' : stryMutAct_9fa48("25") ? false : (stryCov_9fa48("25", "26"), typeof index !== (stryMutAct_9fa48("27") ? "" : (stryCov_9fa48("27"), 'number')))) || (stryMutAct_9fa48("30") ? index >= 0 : stryMutAct_9fa48("29") ? index <= 0 : stryMutAct_9fa48("28") ? false : (stryCov_9fa48("28", "29", "30"), index < 0)))) || (stryMutAct_9fa48("33") ? index < this.tasks.length : stryMutAct_9fa48("32") ? index > this.tasks.length : stryMutAct_9fa48("31") ? false : (stryCov_9fa48("31", "32", "33"), index >= this.tasks.length)))) {
        if (stryMutAct_9fa48("34")) {
          {}
        } else {
          stryCov_9fa48("34");
          throw new Error(stryMutAct_9fa48("35") ? "" : (stryCov_9fa48("35"), "Index invalid!"));
        }
      }
      return this.tasks.splice(index, 1)[0];
    }
  }
  toggleTask(index) {
    if (stryMutAct_9fa48("36")) {
      {}
    } else {
      stryCov_9fa48("36");
      if (stryMutAct_9fa48("39") ? (typeof index !== 'number' || index < 0) && index >= this.tasks.length : stryMutAct_9fa48("38") ? false : stryMutAct_9fa48("37") ? true : (stryCov_9fa48("37", "38", "39"), (stryMutAct_9fa48("41") ? typeof index !== 'number' && index < 0 : stryMutAct_9fa48("40") ? false : (stryCov_9fa48("40", "41"), (stryMutAct_9fa48("43") ? typeof index === 'number' : stryMutAct_9fa48("42") ? false : (stryCov_9fa48("42", "43"), typeof index !== (stryMutAct_9fa48("44") ? "" : (stryCov_9fa48("44"), 'number')))) || (stryMutAct_9fa48("47") ? index >= 0 : stryMutAct_9fa48("46") ? index <= 0 : stryMutAct_9fa48("45") ? false : (stryCov_9fa48("45", "46", "47"), index < 0)))) || (stryMutAct_9fa48("50") ? index < this.tasks.length : stryMutAct_9fa48("49") ? index > this.tasks.length : stryMutAct_9fa48("48") ? false : (stryCov_9fa48("48", "49", "50"), index >= this.tasks.length)))) {
        if (stryMutAct_9fa48("51")) {
          {}
        } else {
          stryCov_9fa48("51");
          throw new Error(stryMutAct_9fa48("52") ? "" : (stryCov_9fa48("52"), "Index invalid!"));
        }
      }
      this.tasks[index].completed = stryMutAct_9fa48("53") ? this.tasks[index].completed : (stryCov_9fa48("53"), !this.tasks[index].completed);
      return this.tasks[index].completed;
    }
  }
  getTasks() {
    if (stryMutAct_9fa48("54")) {
      {}
    } else {
      stryCov_9fa48("54");
      return stryMutAct_9fa48("55") ? [] : (stryCov_9fa48("55"), [...this.tasks]);
    }
  }
  clearTasks() {
    if (stryMutAct_9fa48("56")) {
      {}
    } else {
      stryCov_9fa48("56");
      this.tasks = stryMutAct_9fa48("57") ? ["Stryker was here"] : (stryCov_9fa48("57"), []);
    }
  }
}
module.exports = TaskManager; // pentru Jest/testare unitară