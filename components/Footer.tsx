export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-6 z-40">
     

    
        <div className="border-t border-gray-700 mt-0 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CB . All rights reserved.
          </p>
        </div>
      
    </footer>
  );
}