import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';
import { API_BASE } from '../constants/api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setUser } from '../slice/userSlice';

function Profile() {
  const user = useSelector((state: RootState) => state.user);
  const [file, setFile] = useState<File | null>(null);
  const [isLoad, setIsLoad] = useState<boolean>(false)
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
    birthdate: '',
  });

  useEffect(() => {
    setForm({
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      birthdate: user.birthdate,
    });
  }, [user]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('fname', form.fname);
    formData.append('lname', form.lname);
    formData.append('email', form.email);
    formData.append('birthdate', form.birthdate);
    if (file) {
      formData.append('image', file);
    }
    setIsLoad(true);
    try {
      await axios.put(`${API_BASE}/api/user`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const responseUser = await axios.get(`${API_BASE}/api/user`, {withCredentials: true});
      const { userId, fname, lname, image, birthdate, email } = responseUser.data.data;
      dispatch(setUser({ userId, fname, lname, image, birthdate, email }));
      setIsLoad(false);
    } catch (error) {
      setIsLoad(false);
      console.error('Update failed:', error);
    }
  };

  return (
    <div className="flex justify-center items-center py-20 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Edit Profile</h2>

        <div>
          <label className="block font-medium mb-1">First Name</label>
          <input
            type="text"
            name="fname"
            value={form.fname}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Last Name</label>
          <input
            type="text"
            name="lname"
            value={form.lname}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Birthdate</label>
          <input
            type="date"
            name="birthdate"
            value={form.birthdate}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Profile Image</label>
          {user.image && (
            <img
              src={`${user.image}`}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover mb-2"
            />
          )}
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="block w-full text-sm text-gray-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-200"
          disabled={isLoad}
        >
          {isLoad ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  );
}

export default Profile;
