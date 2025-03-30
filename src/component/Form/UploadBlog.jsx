

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db, auth } from '../../component/Services/initializeApp';
import { setDoc, doc } from 'firebase/firestore';
import Swal from 'sweetalert2';

// Input Component
const Input = ({ name, placeholder, onChange, value }) => (
    <div>
        <label>{name}</label>
        <input type="text" placeholder={placeholder} onChange={onChange} value={value} />
    </div>
);

// Textarea Component
const Textarea = ({ name, rows, placeholder, onChange, value }) => (
    <div>
        <label>{name}</label>
        <textarea rows={rows} placeholder={placeholder} onChange={onChange} value={value} />
    </div>
);

// Button Component
const Button = ({ value, onClick }) => (
    <button onClick={onClick}>{value}</button>
);

// Main Upload Component
export const Upload = () => {
    const [image, setImage] = useState('');
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [Category, setCategory] = useState('');
    const [content, setcontent] = useState('');

    const create = (e) => {
        e.preventDefault();
        const userId = auth.currentUser?.uid;
        createBlog(Title, Description, Category, content, userId);
    };

    const generatePostId = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    };

    const createBlog = async (Title, Description, Category, content, userId) => {
        try {
            const postId = generatePostId();
            const postTime = new Date().toISOString();
            const blogRef = doc(db, 'blog', postId);

            await setDoc(blogRef, {
                Title: Title,
                Description: Description,
                Category: Category,
                content: content,
                image: image,
                userId: userId,
                postTime: postTime,
                postId: postId,
            });

            console.log('Blog post created successfully with ID:', postId);

            // Show success alert
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Blog post created successfully!',
                confirmButtonText: 'OK',
            });

            // Clear input fields
            setImage('');
            setTitle('');
            setDescription('');
            setCategory('');
            setcontent('');
        } catch (error) {
            console.error('Error creating blog post:', error);

            // Show error alert
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to create blog post. Please try again.',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <AddBlogBox>
            <form>
                <h1>Add Your Blogs</h1>
                <br />
                <br />
                <Input
                    name="Image URL:"
                    placeholder="Enter image URL"
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                />
                <Input
                    name="Title:"
                    placeholder="Enter your title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={Title}
                />
                <Input
                    name="Description:"
                    placeholder="Enter your Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={Description}
                />
                <Input
                    name="Category:"
                    placeholder="Enter your Category"
                    onChange={(e) => setCategory(e.target.value)}
                    value={Category}
                />
                <Textarea
                    name="Content:"
                    rows="5"
                    placeholder="Enter your content"
                    onChange={(e) => setcontent(e.target.value)}
                    value={content}
                />
                <br />
                <br />
                <Button value="Upload" onClick={create} />
            </form>
        </AddBlogBox>
    );
};

// Styled Components
const AddBlogBox = styled.div`
    height: 100%;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    form {
        width: 500px;
        height: 600px;
        background-color: rgba(0, 0, 0, 0.34);
        color: #fff;
        border-radius: 10px;
        padding: 1rem;
        @media only screen and (max-width: 600px) {
            width: 100%;
        }
        h1 {
            width: fit-content;
            margin: auto;
            font-size: 1.5rem;
        }
        label {
            display: block;
            margin-bottom: 0.5rem;
        }
        input,
        textarea {
            width: 100%;
            padding: 0.5rem;
            margin-bottom: 1rem;
            border-radius: 5px;
            border: 1px solid #ccc;
        }
        button {
            padding: 0.5rem 1rem;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            &:hover {
                background-color: #0056b3;
            }
        }
    }
`;

export default Upload;