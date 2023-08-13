import './TopicPage.css';
import QuizPage from './QuizPage';

function TopicPage({name}) {
    return (
        <div className='topicpage-wrapper'>
            <h3 className='les-titles'>Basic Organization of a Computer</h3>
            <p className='les-description'>The basic organization of a computer refers to the fundamental components and structure that allow a computer to function. It involves several interconnected parts, including the central processing unit (CPU), memory (RAM), input/output devices (keyboard, mouse, monitor), storage devices (hard drive, SSD), and various buses that facilitate communication between these components.</p>
            <h3 className='les-titles'>Software - What and How:</h3>
            <p className='les-description'>Software are programs that tell a computer what to do. There are two types: system software (manages computer) and application software (specific tasks like word processing).</p>
            <h3 className='les-titles'>Problem Solving Steps:</h3>
            <p className='les-description'>
                1. Understand the Problem: Know what the problem is asking.<br/>
                2. Plan: Think about how to solve it.<br/>
                3. Do: Write code based on the plan.<br/>
                4. Check: Test if the code works.<br/>
                5. Document: Explain how the code works.
            </p>
            <h3 className='les-titles'>Flow Charts</h3>
            <p className='les-description'>Pictures that show steps in a process or program. Use shapes and arrows to connect the steps.</p>
            <h3 className='les-titles'>Introduction to C:</h3>
            <p className='les-description'>C is a simple and powerful programming language made in the 1970s. It's good for making programs and works closely with a computer's hardware.</p>
            <h3 className='les-titles'>Keywords, Data Types, Variables:</h3>
            <p className='les-description'>Keywords are special words in C. Variables hold data (numbers, text) and have types (like 'int' for numbers).</p>
            <h3 className='les-titles'>Constants and Statements:</h3>
            <p className='les-description'>Constants are fixed values (like 5 or 'A'). Statements are instructions in programs (like telling the computer what to do).</p>
            <h3 className='les-titles'>Symbolic Constant:</h3>
            <p className='les-description'>A name given to a constant value in the program. Helps read and change values easily.</p>
            <div className='quiz-btn-wrapper'>
                <h4 className='quiz-btn'>
                    Quiz
                    {/* <QuizPage /> */}
                </h4>
            </div>  
        </div>
    );
  }
  
  export default TopicPage;
  