import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../../components/layout/BottomNav';
import './FamilyList.css';

const FamilyList = () => {
    const navigate = useNavigate();

    const members = [
        { id: 1, name: 'Tía Marta', relation: 'Tía', age: 65, status: 'Control al día', image: null },
        { id: 2, name: 'Juan (Hijo)', relation: 'Hijo', age: 12, status: 'Vacunas pendientes', image: null },
    ];

    return (
        <div className="family-list-container">
            {/* Header */}
            <div className="family-list-header">
                <button onClick={() => navigate('/dashboard')} className="family-back-btn">
                    <span className="family-header-icon">←</span>
                </button>
                <span className="family-header-title">Mi Familia</span>
                <button onClick={() => navigate('/family/add')} className="add-member-btn-header">
                    <span className="add-icon-header">+</span>
                </button>
            </div>

            <div className="family-content">

                {members.map(member => (
                    <div
                        key={member.id}
                        className="card family-member-card"
                        onClick={() => navigate(`/family/${member.id}`)}
                    >
                        <div className="member-avatar">
                            {member.image ? <img src={member.image} alt={member.name} /> : '👤'}
                        </div>
                        <div className="member-info">
                            <div className="member-name">{member.name}</div>
                            <div className="member-details-text">{member.relation} • {member.age} años</div>
                            <div className={`member-status ${member.status.includes('pendientes') ? 'status-pending' : 'status-ok'}`}>
                                {member.status}
                            </div>
                        </div>
                        <span className="member-chevron">›</span>
                    </div>
                ))}

                <div className="card add-new-card" onClick={() => navigate('/family/add')}>
                    <div className="add-plus-large">+</div>
                    <div className="add-new-text">Agregar nuevo integrante</div>
                </div>

            </div>

            <BottomNav />
        </div>
    );
};

export default FamilyList;
