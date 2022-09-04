const Table = ({ data }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th className="id">ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                </tr>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td className="id">{item.id}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;