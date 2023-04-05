// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, onValue, update, remove} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const addTodo = async (title) => {
    const todoRef = ref(db, "todos");
    await push(todoRef, { title, completed: false });
}

export const fetchTodos = (callback) => {
    const todoRef = ref(db, "todos");
    onValue(todoRef, (snapshot) => {
        const todos = [];
        snapshot.forEach((childSnapshot) => {
            todos.push({ id: childSnapshot.key, ...childSnapshot.val() });
        })
        callback(todos);
    });
}

export const toggleTodo = async (id, completed) => {
    const todoRef = ref(db, `todos/${id}`);
    await update(todoRef, { completed });
}

export const deleteTodo = async (id) => {
    const todoRef = ref(db, `todos/${id}`);
    await remove(todoRef);
}