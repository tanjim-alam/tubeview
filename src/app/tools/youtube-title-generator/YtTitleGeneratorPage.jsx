"use client"
import { useState } from 'react';
import axios from 'axios';

function YtTitleGeneratorPage() {
    const [keywords, setKeywords] = useState('');
    const [tone, setTone] = useState('');
    const [description, setDescription] = useState('');
    const [titles, setTitles] = useState([]);

    const generateTitles = async () => {
        const response = await axios.post('/api/generate-titles', {
            keywords,
            tone,
            description
        });
        setTitles(response.data.titles);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">YouTube Title Generator</h1>
            <div className="mb-4">
                <label className="block mb-2">Keywords:</label>
                <input
                    type="text"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    className="border p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Tone:</label>
                <input
                    type="text"
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="border p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Detailed Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border p-2 w-full"
                ></textarea>
            </div>
            <button
                onClick={generateTitles}
                className="bg-blue-500 text-white p-2 rounded"
            >
                Generate Titles
            </button>
            <div className="mt-4">
                {titles.length > 0 && (
                    <ul>
                        {titles.map((title, index) => (
                            <li key={index} className="mb-2">{title}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default YtTitleGeneratorPage;
