import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
export default function useSearchFilters() {
  const route = useRoute();
  const router = useRouter();

  const sortBy = ref("relevance");
  const type = ref("");
  const uploadDate = ref("");

  watch(
    () => route.query,
    newQuery => {
      sortBy.value = newQuery.sort || "";
      type.value = newQuery.type || "";
      uploadDate.value = newQuery.date || "";
    }
  );
  const uploadDateOptions = [
    { label: "Anytime", value: "" },
    { label: "Today", value: "today" },
    { label: "This week", value: "this_week" },
    { label: "This Month", value: "this_month" },
    { label: "This Year", value: "this_year" }
  ];

  const typeOptions = [
    { label: "All", value: "" },
    { label: "Video", value: "video" },
    { label: "Channel", value: "channel" },
    { label: "Playlist", value: "playlist" }
  ];

  const sortByOptions = [
    { label: "Relevance", value: "relevance" },
    { label: "Upload date", value: "upload date" },
    { label: "View count", value: "view count" },
    { label: "rating", value: "rating" }
  ];

  const handleTypeChange = value => {
    type.value = value;
    router.push({ query: { ...route.query, type: value } });
  };
  const handleUploadDateChange = value => {
    uploadDate.value = value;
    router.push({ query: { ...route.query, date: value } });
  };
  const handleSortBy = value => {
    sortBy.value = value;
    router.push({ query: { ...route.query, sort: value } });
  };

  const clearType = () => {
    type.value = "";
    router.push({ query: { ...route.query, type: undefined } });
  };
  const clearSortBy = () => {
    sortBy.value = "";
    router.push({ query: { ...route.query, sort: undefined } });
  };
  const clearUploadDate = () => {
    uploadDate.value = "";
    router.push({ query: { ...route.query, date: undefined } });
  };
  return {
    sortBy,
    type,
    uploadDate,
    uploadDateOptions,
    typeOptions,
    sortByOptions,
    handleTypeChange,
    handleUploadDateChange,
    handleSortBy,
    clearType,
    clearSortBy,
    clearUploadDate
  };
}
