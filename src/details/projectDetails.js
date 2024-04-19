import movieImage from './MovieProjectImage.png'
import life_expectancy from './life_expectancy.png'

const projectDetails = {
    project1: {
        title: "Building Linear Regression Models",
        description: "This project involved completing EDA(Exploratory Data Analysis) and then building models that would accurately predict Life Expectancy (in years) based on input features.",
        imageUrl: life_expectancy,
        projectLink: "https://github.com/RahmaIday/Data-Analysis-Projects/blob/main/ML_Linear_Regression.ipynb",
        skills: ["Scikit-Learn", "Data Pre-processing","EDA","Feature Engineering", "Cross-Validation", "Regularization","Hyperparameter Tuning", "Model Evaluation" ]
    },
    project2: {
        title: "Movie Correlation",
        description: "Performing Data Cleaning and Exploring Correlation in a Movie Dataset with Python in Jupyter Notebooks",
        imageUrl: movieImage,
        projectLink: "https://github.com/RahmaIday/Data-Analysis-Projects/blob/main/Movie_Correlation_Project.ipynb",
        skills: ["Python","Pandas","NumPy","Seaborn","Jupyter Notebook"]
    }
    
    // project3: {
    //     title: "Machine Learning",
    //     description: "This is the description of Project 2.",
    //     imageUrl: fakeImage,
    //     projectLink: "https://github.com/RahmaIday/Data-Analysis-Projects/blob/main/Movie%20Correlation%20Project.ipynb",
    //     skills: ["Deceit", "Fraud"]
    // }
};

export default projectDetails;
