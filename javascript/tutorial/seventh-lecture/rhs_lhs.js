// LHS - Target of assignment - Write
// var temp = 2;

// RHS - Source of assignment - Read
// console.log(temp);

/* RHS(READ) if the variable never found REFERENCE error(1) ----- found but its value impossible TYPE(2) error
LHS(WRITE) If the variable does not exist in the scope Engine will CREATE(3) the variable ( non-strict mode)
LHS(WRITE) If the variable does not exist in the scope gives REFERENCE error(4) (strict mode)
*/

//PRIMITIVE EXAMPLE
// var a = 3;
// console.log(b);                  // RHS(READ) b is not found REFERENCE error -- b is not defined (1)
// console.log(a());                // RHS(READ) a is found but not executable TYPE error -- a is not function(2)
// c = 3                            // LHS(WRITE) c does not exist but engine created it (3) (non-strict mode)
// d = 3                            // LHS(WRITE) d does not exist in the scope gives REFERENCE error(4) (strict mode)


// OBJECT EXAMPLE
/* . operator is like a function, executing smt and return a value
type is object means obj != null and obj != undefined (non-strict mode)
type is object means obj != null && obj != undefined && obj != number && obj != boolean (strict mode)
*/

// ================== OBJECT EXP1: ====================
// var obj = {};
// console.log(obj.a);

/* Try to execute . operator
first try to READ(RHS) left-part which is obj check if it exists(if not gives REFERENCE ERROR(1)) and type is object(If not gives TYPE ERROR(2))
second try to WRITE(LHS) right-part which is a into obj if a is not found it JS will create(3) and make it undefined
finally return a which is undefined
 */

// ================== OBJECT EXP2: ====================
// var obj = {};
// console.log(obj.a.b);

/* First (obj.a) which is undefined (above example)
undefined.b
first try to READ(RHS) left-part which is undefined check if it exists(if not gives REFERENCE ERROR) and type is object(If not gives TYPE ERROR)
undefined is not obj gives TYPE ERROR
 */

// ================== OBJECT EXP3: ====================
// console.log(obj1.a);

/*Try to execute . operator
first try to READ(RHS) left-part which is obj check if it exists in the scope(if not gives REFERENCE ERROR) and type is object(If not gives TYPE ERROR)
Gives REFERENCE error because obj1 does not exist
 */



