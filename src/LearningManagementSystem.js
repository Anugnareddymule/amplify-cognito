import React, { useState } from 'react';
import { BookOpen, Clock, Award, User, Search, Filter, ChevronRight, Star, TrendingUp, Target, CheckCircle, PlayCircle, FileText, PenTool } from 'lucide-react';

const LearningManagementSystem = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  // Mock data for courses
  const courses = [
    {
      id: 1,
      title: "React Fundamentals",
      category: "Web Development",
      instructor: "Sarah Johnson",
      duration: "4 weeks",
      progress: 65,
      rating: 4.8,
      students: 1250,
      price: "$99",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      description: "Master React from basics to advanced concepts",
      lessons: [
        { id: 1, title: "Introduction to React", duration: "15 min", type: "video", completed: true },
        { id: 2, title: "Components and Props", duration: "20 min", type: "video", completed: true },
        { id: 3, title: "State Management", duration: "25 min", type: "video", completed: false },
        { id: 4, title: "React Hooks", duration: "30 min", type: "video", completed: false },
        { id: 5, title: "Final Project", duration: "45 min", type: "assignment", completed: false }
      ]
    },
    {
      id: 2,
      title: "Python for Data Science",
      category: "Data Science",
      instructor: "Dr. Michael Chen",
      duration: "6 weeks",
      progress: 30,
      rating: 4.9,
      students: 890,
      price: "$149",
      image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=400&h=300&fit=crop",
      description: "Learn Python programming for data analysis and machine learning",
      lessons: [
        { id: 1, title: "Python Basics", duration: "20 min", type: "video", completed: true },
        { id: 2, title: "NumPy and Pandas", duration: "35 min", type: "video", completed: false },
        { id: 3, title: "Data Visualization", duration: "40 min", type: "video", completed: false },
        { id: 4, title: "Machine Learning Intro", duration: "50 min", type: "video", completed: false }
      ]
    },
    {
      id: 3,
      title: "AWS Cloud Architect",
      category: "Cloud Computing",
      instructor: "James Wilson",
      duration: "8 weeks",
      progress: 85,
      rating: 4.7,
      students: 2100,
      price: "$199",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      description: "Become an AWS certified cloud architect",
      lessons: [
        { id: 1, title: "AWS Fundamentals", duration: "25 min", type: "video", completed: true },
        { id: 2, title: "EC2 and VPC", duration: "30 min", type: "video", completed: true },
        { id: 3, title: "S3 and CloudFront", duration: "35 min", type: "video", completed: true },
        { id: 4, title: "Lambda and API Gateway", duration: "40 min", type: "video", completed: true },
        { id: 5, title: "Certification Prep", duration: "60 min", type: "quiz", completed: false }
      ]
    },
    {
      id: 4,
      title: "UI/UX Design Masterclass",
      category: "Design",
      instructor: "Emma Rodriguez",
      duration: "5 weeks",
      progress: 0,
      rating: 4.6,
      students: 750,
      price: "$129",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop",
      description: "Create stunning user interfaces and experiences",
      lessons: [
        { id: 1, title: "Design Principles", duration: "18 min", type: "video", completed: false },
        { id: 2, title: "Figma Basics", duration: "25 min", type: "video", completed: false },
        { id: 3, title: "Wireframing", duration: "30 min", type: "video", completed: false },
        { id: 4, title: "Prototyping", duration: "35 min", type: "video", completed: false }
      ]
    }
  ];

  const categories = ['all', 'Web Development', 'Data Science', 'Cloud Computing', 'Design', 'Mobile Development'];

  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary purpose of React components?",
      options: ["To style web pages", "To create reusable UI elements", "To manage databases", "To handle server requests"],
      correct: 1
    },
    {
      id: 2,
      question: "Which AWS service is used for object storage?",
      options: ["EC2", "RDS", "S3", "Lambda"],
      correct: 2
    },
    {
      id: 3,
      question: "What does API stand for?",
      options: ["Application Programming Interface", "Advanced Programming Integration", "Automated Program Interaction", "Application Process Integration"],
      correct: 0
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleQuizSubmit = () => {
    setShowQuizResults(true);
  };

  const handleLessonClick = (lesson) => {
    console.log('Starting lesson:', lesson.title);
    // You can implement lesson navigation logic here
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Learner!</h1>
        <p className="text-blue-100 mb-4">Continue your learning journey</p>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold">4</div>
            <div className="text-sm text-blue-100">Courses Enrolled</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">45%</div>
            <div className="text-sm text-blue-100">Avg Progress</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">2</div>
            <div className="text-sm text-blue-100">Certificates</div>
          </div>
        </div>
      </div>

      {/* Continue Learning */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <TrendingUp className="mr-2 text-green-600" size={20} />
          Continue Learning
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.filter(course => course.progress > 0 && course.progress < 100).map(course => (
            <div key={course.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                 onClick={() => setSelectedCourse(course)}>
              <div className="flex items-center space-x-4">
                <img src={course.image} alt={course.title} className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.instructor}</p>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                           style={{ width: `${course.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-6 shadow-sm border text-center hover:shadow-md transition-shadow cursor-pointer">
          <BookOpen className="mx-auto mb-3 text-blue-600" size={32} />
          <h3 className="font-semibold text-gray-800 mb-2">Browse Courses</h3>
          <p className="text-sm text-gray-600">Discover new learning opportunities</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border text-center hover:shadow-md transition-shadow cursor-pointer">
          <Award className="mx-auto mb-3 text-green-600" size={32} />
          <h3 className="font-semibold text-gray-800 mb-2">My Certificates</h3>
          <p className="text-sm text-gray-600">View your achievements</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border text-center hover:shadow-md transition-shadow cursor-pointer">
          <Target className="mx-auto mb-3 text-purple-600" size={32} />
          <h3 className="font-semibold text-gray-800 mb-2">Learning Goals</h3>
          <p className="text-sm text-gray-600">Set and track your objectives</p>
        </div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-3 text-gray-400" size={20} />
            <select
              className="pl-10 pr-8 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{course.category}</span>
                <div className="flex items-center text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{course.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                <span>By {course.instructor}</span>
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  {course.duration}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-blue-600">{course.price}</span>
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Course
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCourseDetail = () => (
    <div className="space-y-6">
      <button
        onClick={() => setSelectedCourse(null)}
        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
      >
        <ChevronRight size={20} className="rotate-180 mr-1" />
        Back to Courses
      </button>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <img src={selectedCourse.image} alt={selectedCourse.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{selectedCourse.title}</h1>
              <p className="text-gray-600 mb-2">By {selectedCourse.instructor}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {selectedCourse.duration}
                </span>
                <span className="flex items-center">
                  <User size={16} className="mr-1" />
                  {selectedCourse.students} students
                </span>
                <span className="flex items-center">
                  <Star size={16} className="mr-1 text-yellow-500" fill="currentColor" />
                  {selectedCourse.rating}
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-3xl font-bold text-blue-600 mb-2">{selectedCourse.price}</div>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
          <p className="text-gray-700 mb-6">{selectedCourse.description}</p>
          
          {selectedCourse.progress > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-800">Your Progress</span>
                <span className="text-blue-600 font-semibold">{selectedCourse.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full transition-all duration-300" 
                     style={{ width: `${selectedCourse.progress}%` }}></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Course Content */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-semibold mb-4">Course Content</h2>
        <div className="space-y-3">
          {selectedCourse.lessons.map(lesson => (
            <div key={lesson.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  {lesson.type === 'video' && <PlayCircle size={20} className="text-blue-600" />}
                  {lesson.type === 'assignment' && <PenTool size={20} className="text-green-600" />}
                  {lesson.type === 'quiz' && <FileText size={20} className="text-purple-600" />}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{lesson.title}</h3>
                  <p className="text-sm text-gray-600">{lesson.duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {lesson.completed && <CheckCircle size={20} className="text-green-600" />}
                <button
                  onClick={() => handleLessonClick(lesson)}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {lesson.completed ? 'Review' : 'Start'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderQuiz = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Knowledge Check Quiz</h1>
        
        {!showQuizResults ? (
          <div className="space-y-6">
            {quizQuestions.map((question, index) => (
              <div key={question.id} className="border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-4">
                  Question {index + 1}: {question.question}
                </h3>
                <div className="space-y-2">
                  {question.options.map((option, optionIndex) => (
                    <label key={optionIndex} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={optionIndex}
                        onChange={(e) => setQuizAnswers({
                          ...quizAnswers,
                          [question.id]: parseInt(e.target.value)
                        })}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            
            <button
              onClick={handleQuizSubmit}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Submit Quiz
            </button>
          </div>
        ) : (
          <div className="text-center">
            <div className="mb-6">
              <div className="text-6xl font-bold text-blue-600 mb-2">
                {Math.round((Object.values(quizAnswers).filter((answer, index) => answer === quizQuestions[index].correct).length / quizQuestions.length) * 100)}%
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Quiz Complete!</h3>
              <p className="text-gray-600">
                You scored {Object.values(quizAnswers).filter((answer, index) => answer === quizQuestions[index].correct).length} out of {quizQuestions.length} questions correctly.
              </p>
            </div>
            
            <div className="space-y-4">
              {quizQuestions.map((question, index) => (
                <div key={question.id} className={`border rounded-lg p-4 ${
                  quizAnswers[question.id] === question.correct ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                }`}>
                  <h4 className="font-semibold text-gray-800 mb-2">{question.question}</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    Your answer: {question.options[quizAnswers[question.id]] || 'Not answered'}
                  </p>
                  <p className="text-sm text-gray-600">
                    Correct answer: {question.options[question.correct]}
                  </p>
                </div>
              ))}
            </div>
            
            <button
              onClick={() => {
                setShowQuizResults(false);
                setQuizAnswers({});
              }}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Take Quiz Again
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">My Profile</h1>
        
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
            <User size={48} className="text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-gray-600">Student</p>
            <p className="text-sm text-gray-500">Member since January 2024</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-1">4</div>
            <div className="text-sm text-gray-600">Courses Enrolled</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-1">2</div>
            <div className="text-sm text-gray-600">Certificates Earned</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-1">156</div>
            <div className="text-sm text-gray-600">Hours Learned</div>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Achievements</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <Award className="text-green-600" size={24} />
              <div>
                <p className="font-medium text-gray-800">AWS Cloud Architect Certificate</p>
                <p className="text-sm text-gray-600">Completed December 2024</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <CheckCircle className="text-blue-600" size={24} />
              <div>
                <p className="font-medium text-gray-800">React Fundamentals - 65% Complete</p>
                <p className="text-sm text-gray-600">In Progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (selectedCourse) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-6xl mx-auto">
          {renderCourseDetail()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <BookOpen className="text-blue-600" size={32} />
                <span className="text-xl font-bold text-gray-800">LearnHub</span>
              </div>
              <div className="flex space-x-6">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
                  { id: 'courses', label: 'Courses', icon: BookOpen },
                  { id: 'quiz', label: 'Quiz', icon: FileText },
                  { id: 'profile', label: 'Profile', icon: User }
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                      activeTab === id 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4">
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'courses' && renderCourses()}
        {activeTab === 'quiz' && renderQuiz()}
        {activeTab === 'profile' && renderProfile()}
      </div>
    </div>
  );
};

export default LearningManagementSystem;