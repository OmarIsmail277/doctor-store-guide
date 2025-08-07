const DiseaseCard = ({ disease }) => {
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="card">
      <div className="card-image">
        {disease.image && disease.image.startsWith('http') ? (
          <img 
            src={disease.image} 
            alt={disease.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div 
          style={{ 
            display: disease.image && disease.image.startsWith('http') ? 'none' : 'flex',
            width: '100%', 
            height: '100%', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '3rem',
            color: '#667eea'
          }}
        >
          {getInitials(disease.name)}
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{disease.name}</h3>
        <p className="card-description">{disease.description}</p>
      </div>
    </div>
  );
};

export default DiseaseCard;
