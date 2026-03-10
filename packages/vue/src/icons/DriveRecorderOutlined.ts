// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DriveRecorderOutlinedSvg from '@colelab/icons-svg/es/asn/DriveRecorderOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DriveRecorderOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DriveRecorderOutlinedSvg }, slots);
  },
});
