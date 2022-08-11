// Problem-05: Have to Result Out True Or False Between compare two input as object
function isBestFriend(a, b) {
    if ((typeof a !== 'object' || Array.isArray(a) === true) || (typeof b !== 'object' || Array.isArray(b) === true)) {
        return 'Please Enter An Object';
    }
    if ((a.name.toLowerCase() === b.friend.toLowerCase()) && (b.name.toLowerCase() === a.friend.toLowerCase())) {
        return true;
    }
    return false;
}
const obj1 = { name: 'himel', friend: 'aziz' };
const obj2 = { name: 'aziz', friend: 'himel' };
const BestFriend = isBestFriend(obj1, obj2);
console.log(BestFriend);