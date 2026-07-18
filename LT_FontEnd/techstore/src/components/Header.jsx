import PropTypes from 'prop-types';

function Header({ title, onTitleChange, searchTerm, onSearchChange }) {
    return (
        <header >
        <div>
            <h1 style={{textAlign:'left', display: 'block'}}>{title}</h1>
      
        <button onClick={onTitleChange} style={{ marginBottom: '10px' }}>
            Đổi tiêu đề
        </button>
        </div>
      

        <div>
            <input 
                type="text" 
                placeholder="Nhập từ khóa tìm kiếm..." 
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)} 
                style={{ padding: '5px', width: '250px' }}
            />
            <p style={{ textAlign:'left', margin: '10px 0', color: '#333', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Bạn đang tìm: <span style={{ fontWeight: 'bold'}}>{searchTerm}</span>
            </p>
        </div>

    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default Header;