import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, addDoc, serverTimestamp, collection, query, orderBy, getDocs, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";




// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCw4IXKXCLqWrlXGFoG3IiBpGFH6hr8Kw8",
  authDomain: "greenvox-d60b1.firebaseapp.com",
  projectId: "greenvox-d60b1",
  storageBucket: "greenvox-d60b1.appspot.com",
  messagingSenderId: "618867891445",
  appId: "1:618867891445:web:c53ac9fb4867cde8e5b9bc"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", async () => {
    const postsContainer = document.getElementById('postsContainer');
    const newPostButton = document.getElementById('newPostButton');
    const postModal = document.getElementById('postModal');
    const closeModal = document.getElementById('closeModal');

    newPostButton.addEventListener('click', () => {
        postModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        postModal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target == postModal) {
            postModal.style.display = 'none';
        }
    }

    window.createPost = async function() {
        const postTitle = document.getElementById('postTitle').value.trim();
        const postContent = document.getElementById('postContent').value.trim();

        if (postTitle && postContent) {
            try {
                // Guardar la publicación en Firestore
                const docRef = await addDoc(collection(db, 'posts'), {
                    title: postTitle,
                    content: postContent,
                    timestamp: serverTimestamp(),
                    votes: 0 // Establecer el valor inicial de votos como 0
                });
                console.log('Publicación agregada con ID: ', docRef.id);

                // Limpiar los campos del formulario y ocultar el modal
                document.getElementById('postTitle').value = '';
                document.getElementById('postContent').value = '';
                postModal.style.display = 'none';

                // Actualizar los posts en el DOM
                await renderPosts();
            } catch (error) {
                console.error('Error al agregar la publicación: ', error);
                alert('Error al agregar la publicación. Por favor, inténtalo de nuevo.');
            }
        }
    };

    // Función para votar un post hacia arriba
    window.voteUp = async function(postId) {
        try {
            // Obtener la referencia del documento de la publicación
            const postRef = doc(db, 'posts', postId);

            // Obtener los datos actuales de la publicación
            const postSnapshot = await getDoc(postRef);
            const postData = postSnapshot.data();

            // Incrementar el recuento de votos
            const newVotesCount = (postData.votes || 0) + 1;

            // Actualizar el recuento de votos en Firestore
            await updateDoc(postRef, {
                votes: newVotesCount
            });

            // Actualizar los posts en el DOM
            await renderPosts();
        } catch (error) {
            console.error('Error al votar el post hacia arriba: ', error);
            alert('Error al votar el post. Por favor, inténtalo de nuevo.');
        }
    };

    // Función para votar un post hacia abajo
    window.voteDown = async function(postId) {
        try {
            // Obtener la referencia del documento de la publicación
            const postRef = doc(db, 'posts', postId);

            // Obtener los datos actuales de la publicación
            const postSnapshot = await getDoc(postRef);
            const postData = postSnapshot.data();

            // Decrementar el recuento de votos
            const newVotesCount = (postData.votes || 0) - 1;

            // Actualizar el recuento de votos en Firestore
            await updateDoc(postRef, {
                votes: newVotesCount
            });

            // Actualizar los posts en el DOM
            await renderPosts();
        } catch (error) {
            console.error('Error al votar el post hacia abajo: ', error);
            alert('Error al votar el post. Por favor, inténtalo de nuevo.');
        }
    };

    // Función para renderizar los posts en el DOM
    async function renderPosts() {
        // Limpiar los posts anteriores
        postsContainer.innerHTML = '';

        // Obtener los posts de Firestore
        const postsQuery = query(collection(db, 'posts'), orderBy('votes', 'desc'));
        const querySnapshot = await getDocs(postsQuery);

        // Iterar sobre los documentos y mostrar los posts
        querySnapshot.forEach((doc) => {
            const postData = doc.data();
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <div class="title">${postData.title}</div>
                <div class="content">${postData.content}</div>
                <div class="votes">
                    <button onclick="voteUp('${doc.id}')">🡹</button>
                    <span>${postData.votes || 0}</span>
                    <button onclick="voteDown('${doc.id}')">🡻</button>
                </div>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    // Mostrar los posts al cargar la página
    await renderPosts();
});

