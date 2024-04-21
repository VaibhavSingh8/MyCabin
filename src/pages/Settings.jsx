import Row from "../components/Row";
import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";

const Settings = () => {
  return (
    <Row>
      <h1 className="font-bold font-mono text-gray-800">
        Update Hotel Settings
      </h1>
      <UpdateSettingsForm />
    </Row>
  );
};

export default Settings;
