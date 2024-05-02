import React from 'react';
import BlogEntry from './BlogEntry';
// Separate component for our individual entries

function BlogEntries({ entries }) {
    return (
      <div className="recent-entries">
        {entries.map((entry, index) => (
            <BlogEntry key={index} entry={entry} />
        ))}
      </div>
    );
}

export default BlogEntries;