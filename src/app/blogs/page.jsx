import Link from 'next/link';
import React from 'react'
const blogs = [
    {
        "id": "blog-1",
        "title": "The Future of AI in Everyday Life",
        "description": "An exploration into how artificial intelligence is rapidly integrating into our daily routines, from smart homes to personalized recommendations.",
        "tags": ["AI", "Technology", "Innovation", "Future"],
        "more_details": {
            "author": "Alice Wonderland",
            "publish_date": "2024-03-15",
            "category": "Technology",
            "read_time_minutes": 7,
            "keywords": ["artificial intelligence", "smart home", "personalization", "machine learning"],
            "sections": [
                {
                    "heading": "AI in Smart Homes",
                    "content_summary": "Discusses voice assistants, automated lighting, and energy management systems powered by AI."
                },
                {
                    "heading": "Personalized Experiences",
                    "content_summary": "Covers AI's role in streaming service recommendations, e-commerce, and content curation."
                }
            ]
        }
    },
    {
        "id": "blog-2",
        "title": "Mastering Remote Work: Tips for Productivity",
        "description": "Practical advice and strategies for individuals working remotely to maintain focus, manage time, and stay connected with their teams.",
        "tags": ["Remote Work", "Productivity", "Work-Life Balance", "Tips"],
        "more_details": {
            "author": "Bob The Builder",
            "publish_date": "2024-03-20",
            "category": "Work & Career",
            "read_time_minutes": 5,
            "keywords": ["work from home", "time management", "virtual teams", "focus"],
            "sections": [
                {
                    "heading": "Setting Up Your Workspace",
                    "content_summary": "Importance of a dedicated, ergonomic space."
                },
                {
                    "heading": "Effective Communication",
                    "content_summary": "Tools and techniques for clear virtual communication."
                }
            ]
        }
    },
    {
        "id": "blog-3",
        "title": "The Art of Mindful Eating: A Beginner's Guide",
        "description": "Discover how practicing mindful eating can transform your relationship with food, leading to better digestion and overall well-being.",
        "tags": ["Health", "Wellness", "Mindfulness", "Nutrition"],
        "more_details": {
            "author": "Charlie Chaplin",
            "publish_date": "2024-03-25",
            "category": "Health & Wellness",
            "read_time_minutes": 6,
            "keywords": ["mindful eating", "nutrition", "well-being", "digestion", "healthy habits"],
            "sections": [
                {
                    "heading": "What is Mindful Eating?",
                    "content_summary": "Definition and core principles."
                },
                {
                    "heading": "Simple Practices to Start",
                    "content_summary": "Techniques like slowing down, savoring, and listening to your body."
                }
            ]
        }
    },
    {
    "id": "blog-4",
    "title": "Exploring the Wonders of Space Travel",
    "description": "A journey through the history and future of space exploration, from early rockets to potential interstellar missions.",
    "tags": ["Space", "Astronomy", "Exploration", "Science"],
    "more_details": {
      "author": "Neil Armstrong",
      "publish_date": "2024-04-01",
      "category": "Science & Discovery",
      "read_time_minutes": 8,
      "keywords": ["space travel", "NASA", "rockets", "interstellar"],
      "sections": [
        {
          "heading": "The Dawn of Spaceflight",
          "content_summary": "Key milestones and pioneers in early space exploration."
        },
        {
          "heading": "Future Missions and Technologies",
          "content_summary": "Upcoming missions, asteroid mining, and warp drive concepts."
        }
      ]
    }
  },
  {
    "id": "blog-5",
    "title": "The Benefits of Learning a New Language",
    "description": "Uncover the cognitive, social, and cultural advantages of becoming bilingual or multilingual.",
    "tags": ["Education", "Languages", "Culture", "Personal Growth"],
    "more_details": {
      "author": "Maria Linguist",
      "publish_date": "2024-04-05",
      "category": "Education",
      "read_time_minutes": 6,
      "keywords": ["bilingualism", "multilingualism", "cognitive benefits", "cultural immersion"],
      "sections": [
        {
          "heading": "Cognitive Advantages",
          "content_summary": "How learning a language boosts brain function and problem-solving skills."
        },
        {
          "heading": "Cultural Enrichment",
          "content_summary": "Connecting with different cultures through language."
        }
      ]
    }
  },
  {
    "id": "blog-6",
    "title": "Sustainable Living: Small Changes, Big Impact",
    "description": "Simple yet effective ways to reduce your environmental footprint and contribute to a more sustainable planet.",
    "tags": ["Sustainability", "Environment", "Eco-friendly", "Lifestyle"],
    "more_details": {
      "author": "Greta Eco",
      "publish_date": "2024-04-10",
      "category": "Environment",
      "read_time_minutes": 7,
      "keywords": ["eco-friendly", "reduce waste", "renewable energy", "green living"],
      "sections": [
        {
          "heading": "Reducing Plastic Consumption",
          "content_summary": "Tips for minimizing single-use plastics."
        },
        {
          "heading": "Energy Efficiency at Home",
          "content_summary": "Ways to conserve energy and reduce utility bills."
        }
      ]
    }
  }
];
const BlogsPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4 font-sans flex flex-col items-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 mt-4 rounded-lg p-2">Our Blog Posts</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{blog.title}</h2>
                            <p className="text-gray-700 mb-4 flex-grow">{blog.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {blog.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <Link href={`/blogs/${blog.id}`}
                            
                            className=" btn mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300"
                        >
                            Show Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogsPage