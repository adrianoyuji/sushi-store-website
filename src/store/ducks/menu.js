import getMenu from "../../services/firebaseService";

const INITIAL_STATE = getMenu();

export default (state = INITIAL_STATE, action) => state;
