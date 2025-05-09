
const DateDisplay = () => {
    const getFormattedDate = () => {
      const now = new Date();
      return new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format(now);
    };
  
    return (
      <div className="flex flex-col gap-2">
        <label>Date</label>
        <div className="bg-secondary p-2 rounded-md">
          {getFormattedDate()}
        </div>
      </div>
    );
  };
  
  export default DateDisplay;