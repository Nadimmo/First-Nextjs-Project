import React from 'react'

const DetailsPage = ({ params }) => {
  const { id } = params;
  const { title, description, more_details , tags } = blogs.find(blog => blog.id === id);

  return (
    <div className=" bg-gray-100 p-4 font-sans flex flex-col items-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl w-full">
       
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-700 text-lg mb-6">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="text-gray-600 text-sm mb-8">
          <p><strong>Author:</strong> {more_details.author}</p>
          <p><strong>Published:</strong> {more_details.publish_date}</p>
          <p><strong>Category:</strong> {more_details.category}</p>
          <p><strong>Read Time:</strong> {more_details.read_time_minutes} minutes</p>
          <p><strong>Keywords:</strong> {more_details.keywords.join(', ')}</p>
        </div>

        <div className="space-y-6">
          {more_details.sections.map((section, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{section.heading}</h3>
              <p className="text-gray-700">{section.content_summary}</p>
              {/* In a real blog, you'd have full content here instead of just summary */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DetailsPage;

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