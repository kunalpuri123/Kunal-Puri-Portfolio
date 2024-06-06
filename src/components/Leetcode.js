import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeetCodeProfile = () => {
  const [problemData, setProblemData] = useState(null);
  const [badgeData, setBadgeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProblemData = async () => {
      try {
        const response = await axios.get('https://alfa-leetcode-api.onrender.com/userProfileUserQuestionProgressV2/kunalpuri_123');
        setProblemData(response.data.data.userProfileUserQuestionProgressV2);
      } catch (error) {
        console.error('Error fetching problem data:', error);
      }
    };

    const fetchBadgeData = async () => {
      try {
        const response = await axios.get('https://alfa-leetcode-api.onrender.com/kunalpuri_123/badges');
        setBadgeData(response.data);
      } catch (error) {
        console.error('Error fetching badge data:', error);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchProblemData(), fetchBadgeData()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!problemData || !badgeData) {
    return <div>Error loading data</div>;
  }

  const eSolved = problemData.numAcceptedQuestions[0].count;
  const mSolved = problemData.numAcceptedQuestions[1].count;
  const hSolved = problemData.numAcceptedQuestions[2].count;

  const eAll = problemData.numAcceptedQuestions[0].count + problemData.numFailedQuestions[0].count + problemData.numUntouchedQuestions[0].count;
  const mAll = problemData.numAcceptedQuestions[1].count + problemData.numFailedQuestions[1].count + problemData.numUntouchedQuestions[1].count;
  const hAll = problemData.numAcceptedQuestions[2].count + problemData.numFailedQuestions[2].count + problemData.numUntouchedQuestions[2].count;

  const user = {
    problems_solved_count: eSolved + mSolved + hSolved,
    easy_problems_count: eAll,
    medium_problems_count: mAll,
    hard_problems_count: hAll,
  };

  const badges = badgeData.badges;

  return (
    <div id="leetcode" className="flex flex-col items-center justify-center min-h-screen ">
      <div className="text-center mb-8">
        <a href="https://leetcode.com/u/kunalpuri_123/" target="_blank" rel="noopener noreferrer">
          <div className="text-white text-2xl font-bold flex items-center cursor-pointer">
            <img 
              src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png" 
              alt="LeetCode Icon" 
              width="24" 
              height="24" 
              className="mr-2"
            />
            LeetCode Profile
          </div>
        </a>
      </div>
      <div className="lg:w-[calc(60%-4px)] sm:w-full sm:h-[240px] h-[450px] bg-black mt-[8px] rounded-lg border border-borders relative p-8">
        <div className="flex sm:flex-row flex-col justify-between">
          <div>
            <div className="text-[22px] font-bold mt-[40px] text-white ml-[50px]">
              Solved Problems
            </div>
            <div className="text-[72px] font-bold mt-[32px] text-white ml-[50px]">
              {user.problems_solved_count}{" "}
              <span className="text-text_2 text-[14px]">
                {"/ "}
                {user.easy_problems_count + user.medium_problems_count + user.hard_problems_count}
              </span>
            </div>
          </div>
          <div className="flex flex-col relative mr-[50px] mt-[40px] w-[200px] sm:w-[280px] ml-[50px] sm:ml-0">
            <div className="text-[14px] relative">
              <div className="flex flex-row justify-between">
                <div className="mb-[8px] text-green-500">
                  Easy
                </div>
                <div className="mb-[8px] text-green-500">
                  {eSolved}{" / "}{eAll}
                </div>
              </div>
              <div
                className={`sm:w-[280px] w-[200px] h-[8px] bg-borders mb-[16px] relative after:absolute easy-line after:h-[8px] after:rounded rounded after:bg-green-500`}
              ></div>
            </div>
            <div className="text-[14px] relative">
              <div className="flex flex-row justify-between">
                <div className="mb-[8px] text-orange-500">
                  Medium
                </div>
                <div className="mb-[8px] text-orange-500">
                  {mSolved}{" / "}{mAll}
                </div>
              </div>
              <div
                className={`sm:w-[280px] w-[200px] h-[8px] bg-borders mb-[16px] relative after:absolute medium-line after:h-[8px] after:rounded rounded after:bg-orange-500`}
              ></div>
            </div>
            <div className="text-[14px] relative">
              <div className="flex flex-row justify-between">
                <div className="mb-[8px] text-red-600">
                  Hard
                </div>
                <div className="mb-[8px] text-red-600">
                  {hSolved}{" / "}{hAll}
                </div>
              </div>
              <div
                className={`sm:w-[280px] w-[200px] h-[8px] bg-borders mb-[16px] relative after:absolute hard-line after:h-[8px] after:rounded rounded after:bg-red-500`}
              ></div>
            </div>
            <style>
              {`.easy-line::after { width: ${((eSolved || 0) / (eAll || 1)) * 100}%; }`}
              {`.medium-line::after { width: ${((mSolved || 0) / (mAll || 1)) * 100}%; }`}
              {`.hard-line::after { width: ${((hSolved || 0) / (hAll || 1)) * 100}%; }`}
            </style>
          </div>
        </div>
        {badges && (
          <div className="flex justify-center mt-8">
            {badges.map((badge) => (
              <img
                key={badge.id}
                src={badge.icon.startsWith('http') ? badge.icon : `https://leetcode.com${badge.icon}`}
                alt={badge.displayName}
                className="w-20 h-20 mx-2"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LeetCodeProfile;
