// UserProfile.js

import React, { useState } from 'react';
import styles from './userProfile.module.css';

const User_Profile = ({ onSave }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        bio: '',
        linkedIn: '',
        github: '',
        twitter: '',
        email: '',
        profilePhoto: null
    });
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            profilePhoto: file
        });
    };

    const handleSubmit = () => {
        onSave(formData);
        setIsEditing(false);
    };

    return (
        <div className={styles.profile}>
            {isEditing ? (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input type="file" onChange={handleFileChange} accept="image/*" />
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                    <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Bio" />
                    <input type="text" name="linkedIn" value={formData.linkedIn} onChange={handleChange} placeholder="LinkedIn" />
                    <input type="text" name="github" value={formData.github} onChange={handleChange} placeholder="GitHub" />
                    <input type="text" name="twitter" value={formData.twitter} onChange={handleChange} placeholder="Twitter" />
                    <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                    <button type="submit">Save</button>
                </form>
            ) : (
                <div className={styles.profileInfo}>
                    <div className={styles.profilePhoto}>
                        <img src={formData.profilePhoto ? URL.createObjectURL(formData.profilePhoto) : '/default-profile.jpg'} alt="Profile" />
                        <div className={styles.editOverlay}>
                            <label htmlFor="profilePhotoInput">Edit</label>
                            <input type="file" id="profilePhotoInput" onChange={handleFileChange} accept="image/*" />
                        </div>
                    </div>
                    <div className={styles.details}>
                        <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                        <p><strong>Bio:</strong> {formData.bio}</p>
                        <p><strong>LinkedIn:</strong> {formData.linkedIn}</p>
                        <p><strong>GitHub:</strong> {formData.github}</p>
                        <p><strong>Twitter:</strong> {formData.twitter}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                    </div>
                    <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                </div>
            )}
        </div>
    );
}

export default User_Profile;
