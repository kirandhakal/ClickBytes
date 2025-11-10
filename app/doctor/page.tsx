export default function Doctor() {
  const data = [
    { col1: "Dr. John Doe", col2: "Cardiologist", col3: "Available" },
    { col1: "Dr. Jane Smith", col2: "Neurologist", col3: "Not Available" },
    { col1: "Dr. Alex Turner", col2: "Orthopedic", col3: "Available" },
  ];

  return (
    <>
      <section className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Doctor List
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-xl overflow-hidden">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Specialty
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={`border-t border-gray-200 hover:bg-gray-50 transition ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-6 py-4 text-sm text-gray-800">{row.col1}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{row.col2}</td>
                  <td
                    className={`px-6 py-4 text-sm font-medium ${
                      row.col3 === "Available"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {row.col3}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
